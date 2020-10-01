import { SET_USER_INFO } from '../../constants/actions';

const initialState = {
  currentUser: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        currentUser: payload.user
      }

    default:
      return state;
  }
}

export default userReducer;