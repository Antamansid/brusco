import React from "react";

import store from "../../../../../../store/store.jsx";
import {connect} from "react-redux";


import "jquery-ui/ui/widgets/autocomplete";



class Consoles extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidUpdate(){
        this.fillUp();
    }
    fillUp(){
        let consoles = [];
        if(this.props.consoles.consoles.consoles && this.props.designation.designation){
            consoles = this.props.consoles.consoles.designation.map((data, index)=>{
                return `${data}${this.props.designation.designation}`;
            });
            consoles.push(this.props.designation.designation);
            $(this.consCharInput).autocomplete(
                {
                    source: consoles
                }
            );
            this.consCharInput.value = consoles[consoles.length-1];
        }
    }
    render() {
        if(!this.props.consoles.consoles.consoles || !this.props.designation.designation){
            return <input type="text" placeholder="В базе такой характеристики нет"/>
        }
        return <input type="text" ref={(input)=>{this.consCharInput = input}}/>
        
    }
}

function mapStateToProps(store) {
    return {
        consoles: store.consoles,
        designation: store.designation
    }
}

export default connect (mapStateToProps)(Consoles);