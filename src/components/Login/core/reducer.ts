import {loginState, actionProps} from "../../../interfaces";

export const reducer = (state: loginState, action: actionProps) => {
  switch (action.type) {
    case 'onChange': {
      return {
        ...state,
        data: {
          ...state.data,
          [action.data.name]: action.data.value
        }
      };
    }
    case 'setError': {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.data.name]: action.data.value
        }
      };
    }
    default:
      return state;
  }
};
