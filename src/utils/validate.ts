import {actionProps, loginState} from "../interfaces";

export const onValidate = (data:loginState, key: string, callback:(e:actionProps)=>void) => {
  const regExp = new RegExp(data.validate[key])
  !regExp.test(data.data[key])
    ? callback({type: 'setError', data: {value: 'Не верные данные', name: key}})
    : callback({type: 'setError', data: {value: '', name: key}})
}
