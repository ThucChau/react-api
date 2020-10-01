import { SET_USER_INFO, GET_USER_BY_ID_INFO } from '../constants/actions';
import { userService } from '../services';
import { actShowLoading, actHideLoading } from './index';

export const actSetUserInfo = ({ user }) => {
  return {
    type: SET_USER_INFO,
    payload: {
      user
    }
  }
}

export const asyncGetUserById = ({ userId }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const reponse = await userService.getUserById({ userId });
      dispatch(actHideLoading());
      if (reponse?.data?.status === 200) {
        const user = reponse.data.user;
        dispatch(actSetUserInfo({ user }));
        return {
          ok: true,
          user: reponse.data.user
        }
      } else {
        return {
          ok: false,
          error: reponse?.data?.error
        }
      }
    } catch (error) {
      dispatch(actHideLoading());
      return {
        ok: false,
        error: error.message
      }
    }
  }
}

export const asyncUpdateProfile = ({ avatar, fullname, gender, description }) => {
  return async (dispatch) => {
    try {
      let formData = new FormData();
      formData.append("gender", gender);
      formData.append("fullname", fullname);
      formData.append("description", description);
      if(avatar) {
        formData.append("avatar", avatar);
      }
      dispatch(actShowLoading());
      const response = userService.updateProfile(formData);
      dispatch(actHideLoading());
      if (response?.data?.status === 200) {
        const user = response.data.user;
        dispatch(actSetUserInfo({ user }));
        return {
          ok: true,
          user: response.data.user
        }
      } else {
        return {
          ok: false,
          error: response?.data?.error
        }
      }
    } catch (error) {
      dispatch(actHideLoading());
    }
  }
}