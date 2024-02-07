import {SET_MESSAGE_DATA, SET_DIALOG_DATA} from "./actionTypes";

export const setMessageData = (data:any) => {
  return {
    type: SET_MESSAGE_DATA,
    data,
  }
}
export const setDialogData = (data:any) => {
  return {
    type: SET_DIALOG_DATA,
    data,
  }
}
