import { SHOW_LOADING, HIDE_LOADING } from '../../constants/actions';

const initialState = {
    isLoading: false,
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false
            }
    
        default:
            return state;
    }
}

export default appReducer;