import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import MainNavigator from './MainNavigator';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <MainNavigator />
    </Provider>
);

export default Root;