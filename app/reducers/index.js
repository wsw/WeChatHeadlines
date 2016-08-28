import { combineReducers } from 'redux';
import category from './category';
import articleList from './articleList';

const rootReducer = combineReducers({
    category,
    articleList
});

export default rootReducer;