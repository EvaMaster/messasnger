import {actionProps, loginState} from "../../interfaces";
import {SET_APP_DATA} from "./actionTypes";

export const initialState: loginState = {
  data: {
    name: '',
    password: '',
  },
  errors: {
    name: '',
    password: '',
  },
  validate: {
    name: `^[А-Яа-я\\w\\\\]{8,12}$`,
    password: `^[А-Яа-я\\w\\\\]{8,12}$`,
  }
}
export const reducer = (state: loginState = initialState, action: actionProps) => {
  switch (action.type) {
    case SET_APP_DATA: {
      const { data } = action
      return {
        ...state,
        data,
      }
    }
    default:
      return state;
  }
};
