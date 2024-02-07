import React, {FormEvent} from "react";

export interface iconProps {
  isVisible: boolean,
  onClick: () => void,
}

export interface inputProps {
  typeField: 'text' | 'password' | 'file',
  name: string,
  title: string,
  value: string,
  error: boolean,
  required: boolean,
  errorMessage: string,
  placeholder: string,
  onBlur?: (e: object) => void,
  onChange: (e: string | null | ArrayBuffer) => void,
}

export interface stateProps{
  auth:loginState,
  dialog: messageProps
}
export interface screenProps{
  id: string,
  hash: string
}

export interface messageProps{
  data: dialogsProps[],
  id: string,
}

export interface dialogsProps{
  id: string,
  date: string,
  text: string,
  author: string,
}

export interface sidebarProps {
  name: string
}

export interface panelProps  extends screenProps{}

export interface textareaProps {
  name: string,
  placeholder: string,
  value: string,
  title: string,
  onChange: (e: any) => void
}

export interface userInfoBlockProps {
  data: {
    [key: string]: string
  },
}

export interface sidebarRowProps extends userInfoBlockProps{}

export interface routesProps {
  path: string,
  component: React.ReactNode,
}

export interface loginState {
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
export interface loginFormProps{
  onSubmit: (event: FormEvent, data:loginState) => void
}
export interface actionProps {
  type: string,
  data: {
    [key: string]: string
  },
}
export interface userTypes{
  [key:string]:string | boolean
}
