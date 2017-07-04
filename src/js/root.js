import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HelloWorld from './containers/helloworld'



const Root = ({ store }) => (
    <Provider store={store} >
        <Router>
            <Route path="/" component={HelloWorld} />
        </Router>
    </Provider>
);

export default Root;