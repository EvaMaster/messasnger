import { userTypes } from "../../interfaces";
import {services} from "../../utils";
import {setAppData} from "./actions";

export const fetchLoginUser = (user: any) => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    try {
      const data = await services.setProfile(user)
      dispatch(setAppData(data))
      window?.open(`/dashboard/${user.name}`, '_blank')
    } catch (e) {
      alert(e)
    }
  }
}

export const fetchRegistrationUser = (user: userTypes) => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    try {
      const isExist = await services.getUser(user.name as string)
      if(!isExist){
        const response = await services.registrationUser(user)
        dispatch(setAppData(response))
      }else {
        throw new Error('Пользователь уже существует!')
      }
      window?.open(`/dashboard/${user.name}`, '_blank')
    } catch (e) {
      alert(e)
    }
  }
}
