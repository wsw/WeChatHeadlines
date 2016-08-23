import * as types from '../constants/ActionTypes';
import Toast from '../utils/Toast';
import Http from '../utils/Http';
import { WEIXIN_ARTICLE_TYPE } from '../constants/Urls';
import Storage from '../utils/Storage';

function fetchTypeList() {
    return {
        type: types.FETCH_TYPE_LIST
    }
}

function receiveTypeList(typeList) {
    return {
        type: types.RECEIVE_TYPE_LIST,
        typeList
    }
}

export default function fetchTypes() {
    return dispatch => {
        dispatch(fetchTypeList());
        return Http.get(WEIXIN_ARTICLE_TYPE).then((result) => {
            dispatch(receiveTypeList(result.showapi_res_body.typeList));
            Storage.save('typeList', result.showapi_res_body.typeList);
            const errorMessage = result.showapi_res_error;
            errorMessage && errorMessage !== '' && Toast.show(errorMessage);
        }).catch(() => {
            dispatch(receiveTypeList([]));
            Toast.show('网络发生错误，请重试！');
        })
    }
}