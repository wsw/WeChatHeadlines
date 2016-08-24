import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}