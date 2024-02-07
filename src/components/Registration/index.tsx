import React, {useCallback} from 'react';
import RegistrationForm from "../forms/RegistrationForm";
import {loginState} from "../../interfaces";
import {useDispatch} from "react-redux";
import {fetchRegistrationUser} from "../../store/auth/middleware";

const Registration = () => {
  const dispatch = useDispatch()

  const onHandleSubmit = useCallback((e: { preventDefault: () => void; }, state: loginState) => {
    e.preventDefault()
    const { data, errors } = state;

    if(data.password !== data.passwordRepeat) errors.password = 'Не верные данные'

    if(!Object.values(errors).find((value) => !!value)){
      const payload = {
        name:data.name,
        password:data.password,
        passwordRepeat:data.passwordRepeat,
        file: data.file,
        description: data.description,
        isAuth:true,
        online: true,
      }
      dispatch(fetchRegistrationUser(payload))
    } else{
      alert('Проверьте введенные данные!')
    }
  }, [dispatch])

  return (
    <div className="registration">
      <div className="container">
        <h1>Добро пожаловать</h1>
        <RegistrationForm onSubmit={onHandleSubmit}/>
      </div>
    </div>
  );
};

export default Registration;
