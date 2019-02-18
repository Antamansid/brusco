import React from "react";

import store from "../../../../../../store/store.jsx";
import {connect} from "react-redux";



class Consoles extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.consoles.consoles || !this.props.designation.designation){
            return <select><option value={"Не выбрана характеристика"}>Не выбрана характеристика</option></select>
        }
        let consoles = this.props.consoles.designation.map((data, index)=>{
            return <option value={`${data}${this.props.designation}`}>{data}{this.props.designation}</option>
        });
        consoles.push(<option value={this.props.designation.designation} selected={true}>{this.props.designation.designation}</option>);
        return <select>
            {consoles}
        </select>;
        
    }
}

function mapStateToProps(store) {
    return {
        consoles: store.consoles,
        designation: store.designation
    }
}

export default connect (mapStateToProps)(Consoles);