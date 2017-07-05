import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './js/reducers';
import Root from './js/root';

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== `production`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

let store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
);