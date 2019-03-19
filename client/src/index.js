/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './setupProxy';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { SnackbarProvider } from 'material-ui-snackbar-redux'
import ReduxThunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'

import Reducer from './reducers';
// const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <SnackbarProvider SnackbarProps={{ autoHideDuration: 3500 }}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </SnackbarProvider>
    </Provider>

, document.getElementById('root'));

