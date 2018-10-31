import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <div>
            {makeBest(this.props.path.pathname)}
        </div>;
    }
};

function makeBest(path) {
    let data = ""
    switch (path) {
        case "/": {
            data = <ul className="nav nav-tabs">
                <li role="presentation" className="active"><Link to="/">Домой</Link></li>
                <li role="presentation"><Link to="/itemmake">Сделать предмет</Link></li>
                <li role="presentation"><Link to="/about">О нас</Link></li>
            </ul>;
            break;
        }
        case "/itemmake": {
            data = <ul className="nav nav-tabs">
                <li role="presentation"><Link to="/">Домой</Link></li>
                <li role="presentation" className="active"><Link to="/itemmake">Сделать предмет</Link></li>
                <li role="presentation"><Link to="/about">О нас</Link></li>
            </ul>;
            break;
        }
        case "/about": {
            data = <ul className="nav nav-tabs">
                <li role="presentation"><Link to="/">Домой</Link></li>
                <li role="presentation"><Link to="/itemmake">Сделать предмет</Link></li>
                <li role="presentation" className="active"><Link to="/about">О нас</Link></li>
            </ul>;
            break;
        }
    }
    return data;

}