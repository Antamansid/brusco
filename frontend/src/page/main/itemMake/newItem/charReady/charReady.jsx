import React from "react";

export default class CharReady extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.chars.length){
            return <div><p>Добавьте характеристику</p></div>
        }
        let chars = this.props.chars.map((data, index)=>{
             return <div key = {index}>
                <span>{data.nameCharInput}</span>:
                <span>{data.countCharInput}</span>
                <span>{data.beiCharInput}</span>
            </div>
        })
        return <div>
            {chars}
        </div>;
    }
}