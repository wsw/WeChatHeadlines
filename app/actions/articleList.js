import * as types from '../constants/ActionTypes';
import Toast from '../utils/Toast';
import Http from '../utils/Http';
import { WEXIN_ARTICLE_LIST } from '../constants/Urls';
/**
 * categoryId: 目录
 * opt: 0 初始化加载数据，1 下拉刷新，2 加载更多
 * pageNo: 当前页面
 * ext: 扩展字段
 */
export function fetchArticles(categoryId, opt, pageNo, ext) {
    return dispatch => {
        dispatch(fetchArticleList(types.FETCH_ARTICLE_LIST, categoryId, opt, pageNo, ext));
        return Http.get(`${WEXIN_ARTICLE_LIST}?typeId=${categoryId}&page=${page}`).then((result) => {
            dispatch(fetchArticleList(types.RECEIVE_ARTICLE_LIST, categoryId, opt, 
                pageNo, ext, result.showapi_res_body.pagebean.contentlist));
        }).catch((result) => {
            dispatch(fetchArticleList(types.RECEIVE_ARTICLE_LIST, categoryId, opt, 
                pageNo, ext, []));
            Toast.show('网络发生错误，请重试');
        });
    }
}

function fetchArticleList(type, categoryId, opt, pageNo, ext, articleList=[]) {
    return {
        type: type,
        categoryId,
        opt,
        page,
        ext,
        articleList
    }
}