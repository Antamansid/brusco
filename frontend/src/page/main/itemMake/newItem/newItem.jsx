import React from "react";
import ReactDOM from 'react-dom';

import CharReady from "./charReady/charReady.jsx"
import Chars from "./chars/chars.jsx"

import itemsEditActions from "../../../../actions/itemsEditActions.jsx";
import charsEditActions from "../../../../actions/charsEditActions.jsx";

import {connect} from "react-redux";
import store from "../../../../store/store.jsx";


class NewItem extends React.Component {
    constructor(props){
        super(props);
    }
    addItem(){
        //Диспатчим экшн Добавить итем
        this.props.dispatch(itemsEditActions.addItem(this.props.chars, this.nameItemInput.value, this.beiItemInput.value));
        //Диспатчим Экшн "Очистить поля характеристик"
        this.props.dispatch(charsEditActions.clearChars());
        //Очистить поле имени Итема
        this.nameItemInput.value = "";
        //Очистить поле БЕИ итема
        this.beiItemInput.value = "";
    }
    render() {
        return  <div id="makeItem" className="ui-widget-content ui-state-default">
                    <h2 className="ui-widget-header">Создать вещь</h2>
                    <input type="text" placeholder="наименование итема" ref={(input)=>{this.nameItemInput = input}}/>
                    <input type="text" placeholder="БЕИ итема" ref={(input)=>{this.beiItemInput = input}}/>
                    <Chars/>
                    <CharReady/>
                    <button onClick={this.addItem.bind(this)}>Создать итем</button>
                </div>;
    }
}

function mapStateToProps(store) {
    return {
        chars: store.chars
    }
}

export default connect (mapStateToProps)(NewItem);