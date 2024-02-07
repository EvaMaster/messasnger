
import {services} from "../../utils";
import {setAppData} from "./actions";

export const fetchLoginUser = (user:any) => {
  return async (dispatch:any) => {
    try {
      const data = await services.setProfile(user)
      dispatch(setAppData(data))
      window?.open(`/dashboard/${user.name}`, '_blank')
    } catch (e) {
      alert(e)
    }
  }
}
