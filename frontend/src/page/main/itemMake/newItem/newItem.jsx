import React from "react";
import ReactDOM from 'react-dom';

import CharReady from "./charReady/charReady.jsx"
import Chars from "./chars/chars.jsx"

import itemsEditActions from "../../../../actions/itemsEditActions.jsx";
import charsEditActions from "../../../../actions/charsEditActions.jsx";
import store from "../../../../store/store.jsx";
import {connect} from "react-redux";


class NewItem extends React.Component {
    constructor(props){
        super(props);
    }
    addItem(){
        //Создаем итем
        this.props.dispatch(itemsEditActions.addItem(this.charsList, this.nameItemInput, this.beiItemInput));
        //Чистим характеристики
        this.props.dispatch(charsEditActions.clearChars());

    }
    render() {
        return  <div id="makeItem" className="ui-widget-content ui-state-default">
                    <h2 className="ui-widget-header">Создать вещь</h2>
                    <input type="text" placeholder="наименование итема" ref={(input)=>{this.nameItemInput = input}}/>
                    <input type="text" placeholder="БЕИ итема" ref={(input)=>{this.beiItemInput = input}}/>
                    <Chars/>
                    <CharReady chars = {this.props.chars.chars} ref ={(node)=>{this.charsList = ReactDOM.findDOMNode(node)}}/>
                    <button onClick={this.addItem.bind(this)}>Создать итем</button>
                </div>;
    }
}

function mapStateToProps(store) {
    return {
        items: store.items,
        chars: store.chars,
        bei: store.bei,
        consoles: store.consoles
    }
}

export default connect (mapStateToProps)(NewItem);