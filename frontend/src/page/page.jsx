import React from 'react';

import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';

export default class Page extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <div>
            <Header/>
            <Main/>
        </div>;
    }
}