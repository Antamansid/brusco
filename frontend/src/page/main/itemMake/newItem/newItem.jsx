import React from "react";
import $ from  "jquery";
import "jquery-ui";

import CharReady from "./charReady/charReady.jsx"

import itemsEditActions from "../../../../actions/itemsEditActions.jsx"
import charsEditActions from "../../../../actions/charsEditActions.jsx"
import store from "../../../../store/store.jsx";
import {connect} from "react-redux"

class NewItem extends React.Component {
    constructor(props){
        super(props);
    }
    addChar(){
        let chars = charsEditActions.addCharPos(this.nameCharInput.value, this.countCharInput.value, this.beiCharInput.value);
        this.nameCharInput.value = "";
        this.countCharInput.value = "";
        this.beiCharInput.value = "";
        this.props.dispatch(chars);
    }
    render() {
        return <div>
            <div id="makeItem" className="ui-widget-content ui-state-default">
                <h2 className="ui-widget-header">Создать итем</h2>
                <input data-role = "ItemName" type="text"/>
                <div data-role = "Char">
                    <input data-role = "nameChar" type="text" placeholder="Наименование характеристики" ref={(input)=>{this.nameCharInput = input}}/>
                    <input data-role = "countChar"  type="text" placeholder="Количество" ref={(input)=>{this.countCharInput = input}}/>
                    <input data-role = "beiChar"  type="text" placeholder="БЕИ" ref={(input)=>{this.beiCharInput = input}}/>
                    <CharReady chars = {this.props.chars.chars}/>
                </div>
                <button onClick={this.addChar.bind(this)}>Добавить характеристику</button>
            </div>
            <button onClick={addItem}>Создать итем</button>
        </div>;
    }
}

function addItem(event){
    let newItem = document.createElement("div");
    newItem.setAttribute("data-id", "id1");
    $(newItem).append(`<h3>${$('[data-role = "ItemName"]').val()}</h3>`);
    $(newItem).append(`<div>${$('[data-role = "CharReady"]').html()}</div>`);
    $(newItem).draggable({
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
    });
    $("#compItem").droppable({
        accept: "div",
        drop: function( event, ui ) {
            ui.draggable.appendTo("#ItemMaker");
        }
    });
    $(newItem).appendTo("#findItem");
    $("#makeItem").children('[data-role = "ItemName"]').val("");
    $("#makeItem").children('[data-role = "Char"]').children('[data-role = "CharReady"]').html("");
}


function mapStateToProps(store) {
    return {
        items: store.items,
        chars: store.chars
    }
}

export default connect (mapStateToProps)(NewItem);