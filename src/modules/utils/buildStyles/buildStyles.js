import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import chokidar from 'chokidar';

// Получаем __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к папке styles (относительно расположения скрипта)
const stylesDir = path.join(process.cwd(), 'src', 'styles');

// Путь к конфигурационному файлу
const configPath = path.join(__dirname, 'styles.config.js');

// Преобразуем путь в file:// URL
const configUrl = pathToFileURL(configPath).href;

// Путь к итоговому файлу _global.scss
const outputFilePath = path.join(stylesDir, '_global.scss');

// Проверяем, существует ли папка styles
if (!fs.existsSync(stylesDir)) {
  console.error(`Папка ${stylesDir} не существует! Создайте её вручную.`);
  process.exit(1); // Завершаем выполнение скрипта с ошибкой
}

// Проверяем, существует ли конфигурационный файл
if (!fs.existsSync(configPath)) {
  console.error(`Конфигурационный файл ${configPath} не существует!`);
  process.exit(1); // Завершаем выполнение скрипта с ошибкой
}

// Функция для загрузки конфигурации
const loadConfig = async () => {
  try {
    // Очищаем кэш модуля перед загрузкой
    const cacheBuster = `?t=${Date.now()}`; // Добавляем временную метку для предотвращения кэширования
    const configModule = await import(`${configUrl}${cacheBuster}`); // Используем configUrl с cacheBuster
    return configModule.default;
  } catch (error) {
    console.error(`Ошибка при загрузке конфигурации: ${error.message}`);
    process.exit(1);
  }
};

// Функция для рекурсивной обработки папок и файлов
const processFolder = (folderPath, folderConfig) => {
  let globalStylesContent = '';

  // Проверяем, существует ли папка
  if (!fs.existsSync(folderPath)) {
    console.warn(`Папка ${folderPath} не существует!`);
    return globalStylesContent;
  }

  // Обрабатываем файлы, указанные в порядке
  if (folderConfig.files && folderConfig.files.length > 0) {
    folderConfig.files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      if (fs.existsSync(filePath)) {
        const relativePath = path.relative(stylesDir, filePath).replace(/\\/g, '/');
        const fileName = path.basename(relativePath, '.scss').replace(/^_/, '');
        const directoryPath = path.dirname(relativePath);
        const fullPath = directoryPath !== '.' ? `${directoryPath}/${fileName}` : fileName;
        globalStylesContent += `@forward '${fullPath}';\n`;
      } else {
        console.warn(`Файл ${filePath} не найден!`);
      }
    });
  }

  // Обрабатываем подпапки, указанные в порядке
  if (folderConfig.subfolders && folderConfig.subfolders.length > 0) {
    folderConfig.subfolders.forEach((subfolderConfig) => {
      const subfolderPath = path.join(folderPath, subfolderConfig.folder);
      globalStylesContent += processFolder(subfolderPath, subfolderConfig);
    });
  }

  // Добавляем остальные файлы и подпапки, которые не были указаны в порядке
  const allFiles = fs.readdirSync(folderPath);
  const remainingFiles = allFiles.filter((file) => {
    const filePath = path.join(folderPath, file);
    const isFile = fs.statSync(filePath).isFile();
    const isFileInOrder = folderConfig.files && folderConfig.files.includes(file);
    const isSubfolderInOrder =
      folderConfig.subfolders &&
      folderConfig.subfolders.some((subfolder) => subfolder.folder === file);
    return !isFileInOrder && !isSubfolderInOrder;
  });

  remainingFiles.forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.scss')) {
      const relativePath = path.relative(stylesDir, filePath).replace(/\\/g, '/');
      const fileName = path.basename(relativePath, '.scss').replace(/^_/, '');
      const directoryPath = path.dirname(relativePath);
      const fullPath = directoryPath !== '.' ? `${directoryPath}/${fileName}` : fileName;
      globalStylesContent += `@forward '${fullPath}';\n`;
    } else if (fs.statSync(filePath).isDirectory()) {
      const subfolderPath = path.join(folderPath, file);
      globalStylesContent += processFolder(subfolderPath, { files: [], subfolders: [] });
    }
  });

  return globalStylesContent;
};

// Функция для сборки _global.scss
const buildStyles = (foldersOrder) => {
  let globalStylesContent = '';

  // Проходим по папкам в указанном порядке
  foldersOrder.forEach((folderConfig) => {
    const folderPath = path.join(stylesDir, folderConfig.folder);
    globalStylesContent += processFolder(folderPath, folderConfig);
  });

  // Записываем результат в _global.scss
  fs.writeFileSync(outputFilePath, globalStylesContent);
  console.log('_global.scss успешно обновлён!');
};

// Основная функция
const main = async () => {
  // Загружаем конфигурацию
  let foldersOrder = await loadConfig();

  // Наблюдатель за файлами и конфигурацией
  const watcher = chokidar.watch([stylesDir, configPath], {
    ignored: /(^|[\/\\])\../, // Игнорировать скрытые файлы
    persistent: true,         // Постоянное наблюдение
    ignoreInitial: true,      // Не запускать сборку при старте
  });

  // События, которые отслеживаются
  watcher
    .on('add', (filePath) => {
      console.log(`Файл ${filePath} добавлен. Пересборка _global.scss...`);
      buildStyles(foldersOrder);
    })
    .on('change', async (filePath) => {
      if (filePath === configPath) {
        console.log('Конфигурация изменена. Перезагрузка...');
        try {
          foldersOrder = await loadConfig(); // Перезагружаем конфигурацию
        } catch (error) {
          console.error(`Ошибка при загрузке конфигурации: ${error.message}`);
          return;
        }
      }
      console.log(`Файл ${filePath} изменён. Пересборка _global.scss...`);
      buildStyles(foldersOrder);
    })
    .on('unlink', (filePath) => {
      console.log(`Файл ${filePath} удалён. Пересборка _global.scss...`);
      buildStyles(foldersOrder);
    });

  console.log('Наблюдение за файлами и конфигурацией запущено...');

  // Первоначальная сборка
  buildStyles(foldersOrder);
};

// Запуск основной функции
main().catch((error) => {
  console.error('Ошибка в основном процессе:', error);
});