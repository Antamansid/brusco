import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import Page from './page/page.jsx';
import About from './page/main/about/about.jsx';
import ItemMake from './page/main/itemMake/itemMake.jsx';
import MainPage from './page/main/mainpage/mainpage.jsx';

import store from './store/store.jsx';
import {Provider} from 'react-redux';

const app = document.getElementById('main');

ReactDOM.render(
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Page}>
                    <IndexRoute component={MainPage} />
                    <Route path="itemmake" component={ItemMake} />
                    <Route path="about" component={About} />
                </Route>
            </Router>
        </div>
    , app);