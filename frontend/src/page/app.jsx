import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './layouts/main.jsx';
import About from './main/about.jsx';
import ItemMake from './main/itemmake.jsx';
import MainPage from './main/mainpage.jsx';

const app = document.getElementById('main');

ReactDOM.render(
    <div><Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={MainPage} />
            <Route path="itemmake" component={ItemMake} />
            <Route path="about" component={About} />
        </Route>
    </Router></div>
    , app);