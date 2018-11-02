import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li role="presentation" className={(this.props.path.pathname === "/") ? 'active' : null}><Link to="/">Домой</Link></li>
                <li role="presentation" className={(this.props.path.pathname === "/itemmake") ? 'active' : null}><Link to="/itemmake">Сделать предмет</Link></li>
                <li role="presentation" className={(this.props.path.pathname === "/about") ? 'active' : null}><Link to="/about">О нас</Link></li>
            </ul>
        </div>;
    }
};