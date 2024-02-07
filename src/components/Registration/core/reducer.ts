interface S {
  data: {
    [key: string]: string;
  },
  errors: {
    [key: string]: string;
  },
  validate: {
    [key: string]: string;
  }
}

interface A {
  type: string,
  data: {
    [key: string]: string
  },
}

export const reducer = (state: S, action: A) => {
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
    case 'checkPassword': {
      if (action.data.opposite) {
        if (state.data['password'] !== state.data['passwordRepeat']) {
          return {
            ...state,
            errors: {
              ...state.errors,
              [action.data.opposite]: action.data.value
            }
          };
        } else{
          return {
            ...state,
            errors: {
              ...state.errors,
              [action.data.name]: '',
              [action.data.opposite]: ''
            }
          };
        }
      }
      return state;
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
