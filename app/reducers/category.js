import { FETCH_CATEGORYS_DATA_STATUS } from '../constants/ActionTypes';

const initialSate = {
    status: FETCH_CATEGORYS_DATA_STATUS.INITIALIZE,
    loading: false, 
    data: []
};

export default function category(state = initialSate, action) {
    switch (action.type) {
        case FETCH_CATEGORYS_DATA_STATUS.INITIALIZE:
            return {
                ...state, status: action.type
            }
        case FETCH_CATEGORYS_DATA_STATUS.START:
            return {
                ...state, status: action.type, loading: true
            }
        case FETCH_CATEGORYS_DATA_STATUS.SUCCESS:
            return {
                ...state, status: action.type, loading: false,
                data: action.data
            }
        case FETCH_CATEGORYS_DATA_STATUS.FAILURE:
            return {
                ...state, status: action.type, loading: false
            }
        default:
            return state;
    }
}