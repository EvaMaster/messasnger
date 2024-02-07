import React, {FC} from 'react';
import {textareaProps} from "../../interfaces";

const TextArea: FC<textareaProps> = ({name, placeholder, value, title, onChange}) => (
  <label htmlFor={name} className="label">
    {title && <span className="title">{title}</span>}
    <textarea
      rows={3}
      value={value}
      placeholder={placeholder}
      id={name}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    />
  </label>
);

export default TextArea;
