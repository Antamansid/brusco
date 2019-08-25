import React from 'react';

import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <header>
            <nav>
                <ul>
                    <li><Link to="/">Домой</Link></li>
                    <li><Link to="/itemmake">Сделать предмет</Link></li>
                    <li><Link to="/about">О нас</Link></li>
                </ul>
            </nav>
        </header>;
    }
};