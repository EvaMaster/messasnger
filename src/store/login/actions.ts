import {SET_APP_DATA} from "./actionTypes";

export const setAppData = (data:any) => {
  return {
    type: SET_APP_DATA,
    data,
  }
}
