interface T {
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

export const initialState: T = {
  data: {
    name: '',
    password: '',
    passwordRepeat: '',
    description: '',
    file: '',
  },
  errors: {
    name: '',
    password: '',
    passwordRepeat: '',
    description: '',
    file: '',
  },
  validate: {
    name: `^[А-Яа-я\\w\\\\]{8,12}$`,
    password: `^[А-Яа-я\\w\\\\]{8,12}$`,
    passwordRepeat: `^[А-Яа-я\\w\\\\]{8,22}$`,
  }
}
