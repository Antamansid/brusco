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
                <span>{data.nameChar}</span><span>: </span>
                <span>{data.countChar}</span>
                <span>{data.beiChar}</span>
            </div>
        })
        return <div>
            {chars}
        </div>;
    }
}