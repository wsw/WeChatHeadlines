import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import App from './containers/App';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

console.log(Root);

export default Root;