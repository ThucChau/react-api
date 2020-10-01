import { LOGIN_SUCCESS, LOG_OUT } from '../../constants/actions';
import { setAuthToken } from '../../services';
import { storage } from '../../helpers';

const initialState = {
  ACCESS_TOKEN: storage.getToken() || "",
  isAuthenticated: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      setAuthToken(localStorage.getItem('MEME_TOKEN'))
      return {
        ...state,
        ACCESS_TOKEN: payload.token,
        isAuthenticated: true
      }
    case LOG_OUT: 
      return {
        ...state,
        ACCESS_TOKEN: null,
        isAuthenticated: false
      }

    default:
      return state;
  }

}

export default authReducer;