import {actionProps, messageProps} from "../../interfaces";
import {SET_MESSAGE_DATA, SET_DIALOG_DATA} from "./actionTypes";

export const initialState: messageProps = {
  data:[],
  id: '',

}
export const reducer = (state: messageProps = initialState, action: actionProps) => {
  switch (action.type) {
    case SET_MESSAGE_DATA: {
      const { data } = action
      return {
        ...state,
        ...data,
      }
    }
    case SET_DIALOG_DATA: {
      const { data } = action
      return {
        data: data.dialogs,
        id: data.dialogId,
      }
    }
    default:
      return state;
  }
};
