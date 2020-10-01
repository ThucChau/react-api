import { SHOW_LOADING, HIDE_LOADING } from '../constants/actions';

// Action se return ve 2 gia tri: type - payload
export const actShowLoading = () => {
  return {
    type: SHOW_LOADING,
    payload: null
  }
}

export const actHideLoading = () => {
  return {
    type: HIDE_LOADING,
    payload: null
  }
}