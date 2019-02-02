import React from "react";

export default class Consoles extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.consoles.length && !this.props.designation){
            return <select><option value={"Не выбрана характеристика"}>Не выбрана характеристика</option></select>
        }
        let consoles = this.props.consoles.consoles.map((data, index)=>{
            return <option value={`${data}${this.props.designation}`}>{data}{this.props.designation}</option>
        });
        consoles.push(<option value={this.props.designation} selected={true}>{this.props.designation}</option>);
        return <select>
            {consoles}
        </select>;
    }
}