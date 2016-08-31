import { combineReducers } from 'redux';
import category from './category';
import articles from './articles';

const rootReducer = combineReducers({
    category,
    articles
});

export default rootReducer;