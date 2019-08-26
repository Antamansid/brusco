import React from "react";

import store from "../../../../../store/store.jsx";
import {connect} from "react-redux";

class CharReady extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.chars.chars.length){
            return <div><p>Добавьте характеристику</p></div>
        };
        let chars = this.props.chars.chars.map((data, index)=>{
             return <div key = {index}>
                <span>{this.props.bei.bei.magnitude[this.props.bei.bei.id.indexOf(data.idChar)]}</span><span>: </span>
                <span>{data.countChar}</span>
                <span>{data.beiChar}</span>
            </div>
        });
        return <div>
            {chars}
        </div>;
    }
}

function mapStateToProps(store) {
    return {
        chars: store.chars,
        bei: store.bei
    }
}
export default connect (mapStateToProps)(CharReady);