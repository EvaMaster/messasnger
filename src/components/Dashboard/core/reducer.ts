interface S {
  data: {
    [key: string]: string;
  },
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
          [action.data.name]: action.data.value
        }
      };
    }
    default:
      return state;
  }
};
