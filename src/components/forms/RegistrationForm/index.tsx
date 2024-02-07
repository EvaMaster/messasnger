import React, {FC, useReducer} from 'react';
import Input from "../../Input";
import TextArea from "../../TextArea";
import {NavLink} from "react-router-dom";
import {reducer} from "../../Registration/core/reducer";
import {initialState} from "../../Registration/core/initialState";
import {loginFormProps} from "../../../interfaces";
import {onValidate} from "../../../utils/validate";

const RegistrationForm: FC<loginFormProps> = ({onSubmit}) => {
  const [state, dispatch] = useReducer(reducer, {...initialState})
  return (
    <form
      className="form"
      noValidate={true}
      onSubmit={(e) => onSubmit(e, state)}
    >
      <Input
        required={true}
        typeField="text"
        name="name"
        title="Введите ваш Имя"
        value={state.data.name}
        error={!!state.errors.name}
        errorMessage="Допустимо минимум 8, максимум 12 и '\' '_' символы"
        placeholder="Введите ваше имя"
        onBlur={() => onValidate(state, 'name', dispatch)}
        onChange={(e: any) => dispatch({type: 'onChange', data: {value: e, name: "name"}})}
      />
      <Input
        required={true}
        typeField="password"
        name="password"
        title="Придумайте пароль"
        value={state.data.password}
        error={!!state.errors.password}
        placeholder="Придумайте пароль"
        errorMessage="Допустимо минимум 8, максимум 12 и '\',  '_' символы"
        onBlur={() => onValidate(state,'password', dispatch)}
        onChange={(e: any) => dispatch({type: 'onChange', data: {value: e, name: "password"}})}
      />
      <Input
        required={true}
        typeField="password"
        name="passwordRepeat"
        title="Повторите пароль"
        value={state.data.passwordRepeat}
        error={!!state.errors.passwordRepeat}
        placeholder="Повторите пароль"
        errorMessage="Допустимо минимум 8, максимум 12 и '\' '_' символы"
        onBlur={() => onValidate(state,'passwordRepeat', dispatch)}
        onChange={(e: any) => dispatch({type: 'onChange', data: {value: e, name: "passwordRepeat"}})}
      />
      <TextArea
        name="description"
        placeholder="Пару слов о себе"
        value={state.data.description}
        title="Описание"
        onChange={(e: any) => dispatch({type: 'onChange', data: {value: e, name: "description"}})}
      />
      <Input
        required={false}
        typeField="file"
        name="file"
        title="Установить Аватар"
        value={state.data.file}
        error={!!state.errors.file}
        errorMessage="Допустимые форматы: png, jpeg"
        placeholder="Установить Аватар"
        onChange={(e: any) => dispatch({type: 'onChange', data: {value: e, name: "file"}})}
      />
      <div className="form_controls">
        <NavLink to={'/login'}>Войти</NavLink>
        <button>Зарегистрироваться</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
