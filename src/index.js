import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import AppReducer from './store/reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));