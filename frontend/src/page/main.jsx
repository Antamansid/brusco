import React from 'react';
import Header from '../header/header.jsx'

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <div><Header path = {this.props.location}/>{this.props.children}</div>;
    }
}