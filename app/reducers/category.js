import { FETCH_CATEGORYS_DATA_STATUS } from '../constants/ActionTypes';

const initialSate = {
    loading: false, 
    data: [],
    error: null
};

export default function category(state = initialSate, action) {
    switch (action.type) {
        case FETCH_CATEGORYS_DATA_STATUS.START:
            return {
                ...state, loading: true
            }
        case FETCH_CATEGORYS_DATA_STATUS.SUCCESS:
            return {
                ...state, 
                loading: false,
                data: action.data
            }
        case FETCH_CATEGORYS_DATA_STATUS.FAILURE:
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}