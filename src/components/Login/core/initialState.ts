import {loginState} from "../../../interfaces";

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
