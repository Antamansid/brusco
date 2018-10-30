import React from 'react';
import {Link} from 'react-router';
import 'bootstrap';

export default class Header extends React.Component{
    render() {
        return <div>
        <ul className="nav nav-tabs">
            <li role="presentation" className="active"><Link to="/">Домой</Link></li>
            <li role="presentation"><Link to="/itemmake">Сделать предмет</Link></li>
            <li role="presentation"><Link to="/about">О нас</Link></li>
        </ul></div>;
    }
}