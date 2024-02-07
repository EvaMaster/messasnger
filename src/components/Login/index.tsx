import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {fetchLoginUser} from "../../store/auth/middleware";
import LoginForm from "../forms/LoginForm";

const Index = () => {
  const dispatch = useDispatch()

  const onHandleSubmit = useCallback(
    (e: any, data: any) => {
      e.preventDefault()
      if(!Object.values(data.errors).find((value) => !!value)){
        const payload = {
          name:data.data.name,
          password:data.data.password
        }

        dispatch(fetchLoginUser(payload))
      }
    }
  ,[dispatch])

  return (
    <div className="registration">
      <div className="container">
        <h1>Добро пожаловать</h1>
        <h3>Введите данные для регистрации:</h3>
        <LoginForm onSubmit={onHandleSubmit}/>
      </div>
    </div>
  );
};

export default Index;
