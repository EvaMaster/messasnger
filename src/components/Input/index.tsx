import React, {FC, useState} from 'react';
import Icon from "../Icon";
import {inputProps} from "../../interfaces";

const Input: FC<inputProps> = (
  {
    name = '',
    title = '',
    error = false,
    value = '',
    required = false,
    typeField,
    errorMessage = '',
    placeholder = '',
    onBlur = () => {},
    onChange = () => {},
  }
) => {
  const accept = ".png,.jpeg"

  const [visible, setVisible] = useState(false)
  const [drag, setDrag] = useState(false)

  const dragOver = (e: { preventDefault: () => void, dataTransfer: { files: any } }) => {
    e.preventDefault();
    setDrag(true)
  };

  const dragLeave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setDrag(false)
  };

  const fileConverter = new FileReader();
  fileConverter.onloadstart = (e) => {
    if (e.total > 100000) {
      fileConverter.abort()
      alert("Слишком большое изображение")
    }
  }

  try {
    fileConverter.onload = () => {
      onChange(fileConverter.result);
    }
  } catch (e: any) {
    if (e.number === 22) {
      alert('Локальное хранилище переполнено');
    }
  }

  const fileDrop = (e: { preventDefault: () => void, dataTransfer: { files: any } }) => {
    e.preventDefault();
    setDrag(false)
    const {files} = e.dataTransfer;
    for (let file of files) {
      if (!accept.replace(/\./g, '').split(',').some((item) => file.type.includes(item))) {
        return;
      }
      fileConverter.readAsDataURL(file)
    }
  }

  return (
    <label htmlFor={name} className="label">
      {title && <span className="title">{title}{required ? '*' : ''}</span>}
      <div className="wrapper">
        <input
          required={required}
          autoComplete={name}
          className={`${typeField === 'file' && 'none '}input`}
          type={visible ? 'text' : typeField}
          id={name}
          value={typeField === 'file' ? '' : value}
          onChange={(e: any) => {
            typeField === 'file' && e
              ? fileConverter.readAsDataURL(e.target.files[0])
              : onChange(e.target.value)
          }}
          placeholder={placeholder}
          onBlur={(e: object) => onBlur(e)}
        />
        {typeField === 'password' && <Icon isVisible={visible} onClick={() => setVisible(!visible)}/>}
        {
          typeField === 'file' &&
            <div
                className={`${drag ? 'avatar_drop__success ' : ''}avatar_dropdown`}
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
              {
                value
                  ? <img src={value || ''} alt="avatar" className="avatar_preview"/>
                  : <span>Перетащите или нажмите для загрузки аватара</span>
              }
            </div>
        }
      </div>
      {error && <span className="error-text">{errorMessage}</span>}
    </label>
  );
};

export default Input;
