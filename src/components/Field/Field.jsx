import React from "react";

export const Field = ({ tagName: Tag = "input", type = "text", label, id }) => {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <Tag id={id} type={type} className={`field__${Tag}`} />
    </div>
  );
};
