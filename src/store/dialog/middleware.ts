import {services} from "../../utils";
import {setDialogData, setMessageData} from "./actions";
import {dialogsProps} from "../../interfaces";

export const fetchMessageUser = (id: string, message: dialogsProps) => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    try {
      const response = services.setDialog(id, message)
      dispatch(setMessageData(response))
    } catch (e) {
      alert(e)
    }
  }
}
export const getDialogs = (id: string, hash: string) => {
  return async (dispatch: (arg0: { type: string; data: any; }) => void) => {
    try {
      const response = services.getDialog(id, hash)
      dispatch(setDialogData(response))
    } catch (e) {
      alert(e)
    }
  }
}
