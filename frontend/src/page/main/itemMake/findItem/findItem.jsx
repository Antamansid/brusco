import React from "react";
import $ from  "jquery";
import "jquery-ui";

import store from "../../../../store/store.jsx";
import {connect} from "react-redux";


class FindItem extends React.Component {
    constructor(props){
        super(props);
        this.itemsList = [];
    }
    render() {
        let items = ""
        if(this.props.items.items.length){
            items = this.props.items.items.map((data, index)=>{
                let chars = data.charsItem.map((char, index)=>{
                    return <div key = {index}><span>{this.props.bei.bei.magnitude[this.props.bei.bei.id.indexOf(char.idChar)]}</span><span>: </span><span>{char.countChar}</span><span>{char.beiChar}</span></div>
                })
                return <div key = {index} ref={(div)=>{this.itemsList[index] = div}}>
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

function mapStateToProps(store) {
    return {
        items: store.items,
        bei: store.bei
    }
}

export default connect(mapStateToProps)(FindItem);