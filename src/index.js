import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import reducers from './js/reducers'
import Root from './js/root';

let store = createStore(reducers);

ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
);