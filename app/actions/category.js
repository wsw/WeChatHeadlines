import { FETCH_CATEGORYS_DATA_STATUS } from '../constants/ActionTypes';
import Http from '../utils/Http';
import { WEIXIN_ARTICLE_TYPE } from '../constants/Urls';
import Storage from '../utils/Storage';

function fetchCategory(typeObj) {
    return dispatch => {
        dispatch({type: typeObj.START});
        return Http.get(WEIXIN_ARTICLE_TYPE).then((result) => {
            dispatch({
                type: typeObj.SUCCESS,
                data: result.showapi_res_body.typeList
            });
        }, (error) => {
            dispatch({
                type: typeObj.FAILURE,
                error
            });
        });
    }
}

export default function fetchCategoryList() {
    return fetchCategory(FETCH_CATEGORYS_DATA_STATUS, ...arguments);
}
