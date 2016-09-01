import { FETCH_ARTICLES_DATA_STATUS } from '../constants/ActionTypes';

const initialSate = {
    isRefreshing: false,
    isLoadMore: true,
    opt: 0,
    ext: null,
    data: [],
    error: null
};

export default function articles(state = initialSate, action) {
    switch (action.type) {
        case FETCH_ARTICLES_DATA_STATUS.START:
            return {
                ...state,
                opt: action.opt,
                ext: action.ext,
                isRefreshing: action.opt == 1
            };
        case FETCH_ARTICLES_DATA_STATUS.SUCCESS:
            let newContent = action.opt === 2 ? [...state.data, ...action.data] : action.data;
            let isLoadMore = action.data.length === 20;
            
            return {
                ...state,
                opt: action.opt,
                ext: action.ext,
                isRefreshing: false,
                isLoadMore: isLoadMore,
                data: newContent
            };  
        case FETCH_ARTICLES_DATA_STATUS.FAILURE:
            return {
                ...state,
                status: action.type,
                opt: action.opt,
                ext: action.ext,
                isRefreshing: false,
                error: action.error
            };  
        default:
            return state;
    }
}