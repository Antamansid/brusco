import React from 'react';

import {Switch, Route} from 'react-router-dom';

import About from './About/About.jsx';
import ItemMake from './ItemMake/Itemmake.jsx';
import MainPage from './Mainpage/Mainpage.jsx';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <main>
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/itemmake' component={ItemMake}/>
            <Route path='/about' component={About}/>
          </Switch>
        </main>;
    }
};