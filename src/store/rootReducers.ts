import { combineReducers } from 'redux'
import { reducer as auth } from '../store/auth/reducer'
import { reducer as dialog } from '../store/dialog/reducer'

const rootReducer = combineReducers({
  auth,
  dialog
})

export default rootReducer
