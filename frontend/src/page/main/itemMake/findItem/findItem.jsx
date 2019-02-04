import React from "react";
import $ from  "jquery";
import "jquery-ui";

export default class FindItem extends React.Component {
    constructor(props){
        super(props);
        this.itemsList = [];
    }
    componentDidUpdate(){
        this.itemsList.map((elem, index)=>{
            $(elem).draggable({
                revert: "invalid",
                containment: "document",
                helper: "clone",
                cursor: "move"
            });
        })
    }
    render() {
        let items = ""
        if(this.props.items.length){
            items = this.props.items.map((data, index)=>{
                let chars = data.charsItem.map((char, index)=>{
                    return <div><span>{char.nameChar}</span><span>: </span><span>{char.countChar}</span><span>{char.beiChar}</span></div>
                })
                return <div ref={(div)=>{this.itemsList[index] = div}}>
                    <h3>{data.nameItem}</h3>
                    <h4>{data.beiItemInput}</h4>
                    {chars}
                </div>
            })
        }
        return <div>
                <div id="findItem" className="ui-widget-content ui-state-default">
                    <h2 className="ui-widget-header">Поиск итема</h2>
                </div>
                <div>
                    {items}
                </div>
            </div>;
    }
}