import { FETCH_ARTICLES_DATA_STATUS } from '../constants/ActionTypes';
import Http from '../utils/Http';
import { WEXIN_ARTICLE_LIST } from '../constants/Urls';


function fetchArticles(typeObj, categoryId, opt, pageNo, ext) {
    console.log(...arguments);
    return dispatch => {
        dispatch({type: typeObj.START, opt: opt});
        return Http.get(`${WEXIN_ARTICLE_LIST}?typeId=${categoryId}&page=${pageNo}`)
        .then((result) => {
            console.log(result);
            dispatch({
                type: typeObj.SUCCESS,
                opt, ext, 
                data: result.showapi_res_body.pagebean.contentlist
            });
        }).catch((error) => {
            dispatch({
                type: typeObj.FAILURE,
                opt, ext, 
                error
            });
        });
    }
}
/**
 * 获取文章列表数据
 * categoryId: 当前类型下的数据
 * opt：   0 初始化加载数据，1 下拉刷新，2 加载更多
 * pageNo：当前加载的页码
 */
export default function fetchArticleList(categoryId, opt, pageNo, ext) {
    return fetchArticles(FETCH_ARTICLES_DATA_STATUS, ...arguments);
}