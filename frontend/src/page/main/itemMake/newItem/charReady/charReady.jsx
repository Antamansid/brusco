import React from "react";

import store from "../../../../../store/store.jsx";
import {connect} from "react-redux";

class CharReady extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        if(!this.props.chars.length){
            return <div><p>Добавьте характеристику</p></div>
        };
        let chars = this.props.chars.map((data, index)=>{
             return <div key = {index}>
                <span>{data.nameChar}</span><span>: </span>
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
        chars: store.chars
    }
}
export default connect (mapStateToProps)(CharReady);