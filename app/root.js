import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

import App from './container/app';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;