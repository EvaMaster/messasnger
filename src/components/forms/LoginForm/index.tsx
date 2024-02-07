import React, {FC, useReducer} from 'react';
import Input from "../../Input";
import {NavLink} from "react-router-dom";
import {reducer} from "../../Login/core/reducer";
import {initialState} from "../../Login/core/initialState";
import {loginFormProps} from "../../../interfaces";
import {onValidate} from "../../../utils/validate";

const LoginForm:FC<loginFormProps> = ({onSubmit}) => {
  const [state, dispatch] = useReducer(reducer, {...initialState})

  return (
    <form className="form" onSubmit={(e)=>onSubmit(e,state)} noValidate={true} autoComplete="false">
      <Input
        required={true}
        typeField="text"
        name="name"
        title="Введите ваш Имя"
        value={state.data.name}
        error={!!state.errors.name}
        errorMessage="Допустимо минимум 8, максимум 12 и '\' '_' символы"
        placeholder="Введите ваше имя"
        onBlur={() => onValidate(state,'name', dispatch)}
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
        onBlur={() => onValidate(state, 'password', dispatch)}
        onChange={(e: any) => dispatch({type: 'onChange', data: {value: e, name: "password"}})}
      />
      <div className="form_controls">
        <NavLink to={'/registration'}>Зарегистрироваться</NavLink>
        <button>Войти</button>
      </div>
    </form>
  );
};

export default LoginForm;
