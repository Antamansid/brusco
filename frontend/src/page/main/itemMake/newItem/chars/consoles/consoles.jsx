import React from "react";

import store from "../../../../../../store/store.jsx";
import {connect} from "react-redux";



class Consoles extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.consoles.consoles.consoles || !this.props.designation.designation){
            return <select><option value={"Не выбрана характеристика"}>Не выбрана характеристика</option></select>
        }
        let consoles = this.props.consoles.consoles.designation.map((data, index)=>{
            return <option key = {index} value={`${data}${this.props.designation.designation}`}>{data}{this.props.designation.designation}</option>
        });
        consoles.push(<option key = {consoles.lenght + 1} value={this.props.designation.designation}>{this.props.designation.designation}</option>);
        return <select value = {`${this.props.designation.designation}`}>
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