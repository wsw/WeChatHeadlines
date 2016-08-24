import * as types from '../constants/ActionTypes';

const initialSate = {
    loading: false, 
    articles: [],
    opt: 0,
    isRefreshing: false,
    isLoadMore: false,
    ext: null
};

export default function articleList(state = initialSate, action) {
    switch (action.type) {
        case types.FETCH_ARTICLE_LIST:
            return Object.assign({}, state, {
                loading: true,
                isRefreshing: true,
                
            });
        case types.RECEIVE_ARTICLE_LIST:
            return Object.assign({}, state, {
                loading: false,
                typeList: action.typeList
            });
        default:
            return state;
    }
}