import { LOGIN_SUCCESS, LOG_OUT } from '../constants/actions';
import { showToast, storage } from '../helpers';
import { authService } from '../services';
import { actHideLoading, actShowLoading } from './index';
import { actSetUserInfo } from './user';

export const actLoginSuccess = ({ token }) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  }
}

export const asyncHandleLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await authService.login({ email, password });
      dispatch(actHideLoading());
      if (response.data.status !== 200) {
        alert('Error of Server: ',response.data.error);
      } else {
        const user = response.data.user;
        const token = response.data.token;
        storage.setToken(token);
        dispatch(actLoginSuccess({ token }));
        dispatch(actSetUserInfo({ user }));
        showToast('Login thành công !','success');
        return {
          ok: true
        }
      }
    } catch (error) {
      dispatch(actHideLoading());
      console.log("error login: ", error);
    }
  }
}

export const logout = () => async dispatch => {
  dispatch({
    type: LOG_OUT
  })
}

