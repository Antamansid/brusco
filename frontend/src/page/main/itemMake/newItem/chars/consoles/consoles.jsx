import React from "react";

export default class Consoles extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.consoles.length && !this.props.designation){
            return <select><option value={"Не выбрана характеристика"}>Не выбрана характеристика</option></select>
        }
        console.log(this.props.consoles);
        let consoles = this.props.consoles.designation.map((data, index)=>{
            return <option value={`${data}${this.props.designation}`}>{data}{this.props.designation}</option>
        });
        consoles.push(<option value={this.props.designation} selected={true}>{this.props.designation}</option>);
        return <select>
            {consoles}
        </select>;
    }
}