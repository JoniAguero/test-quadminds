/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './setupProxy';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './reducers';

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk, logger)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

