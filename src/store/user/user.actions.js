  import {createAction} from '../../utils/reducer/reducer.utils.jsx'
  import { USER_ACTION_TYPES } from './user.types.js'
  
  export const setCurrentUser = (user) => 
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
  