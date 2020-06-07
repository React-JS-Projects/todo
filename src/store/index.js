import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(reducer, compose(applyMiddleware(logger), composeWithDevTools()));

export default store;