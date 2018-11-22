import React from "react";

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
        this.props.dispatch(charsEditActions.addCharPos(this.nameCharInput.value, this.countCharInput.value, this.beiCharInput.value));
        this.nameCharInput.value = "";
        this.countCharInput.value = "";
        this.beiCharInput.value = "";
    }
    addItem(){
        let itemChars = [];
        for (let i = 0; i < this.charsList.childNodes[0].childNodes.length; i++){
            itemChars.push({nameChar: this.charsList.childNodes[0].childNodes[i].childNodes[0].textContent,
                            countChar: this.charsList.childNodes[0].childNodes[i].childNodes[2].textContent,
                            beiChar: this.charsList.childNodes[0].childNodes[i].childNodes[3].textContent})

        }
        let item = itemsEditActions.addItem({   nameItem: this.nameItemInput.value,
                                                beiItem: this.beiItemInput.value,
                                                charsItem: itemChars});
        this.props.dispatch(item);
        this.props.dispatch(charsEditActions.clearChars());
        this.nameItemInput.value = "";
        this.beiItemInput.value = "";

    }
    render() {
        return <div>
            <div id="makeItem" className="ui-widget-content ui-state-default">
                <h2 className="ui-widget-header">Создать итем</h2>
                <input type="text" placeholder="наименование итема" ref={(input)=>{this.nameItemInput = input}}/>
                <input type="text" placeholder="БЕИ итема" ref={(input)=>{this.beiItemInput = input}}/>
                <div>
                    <input type="text" placeholder="Наименование характеристики" ref={(input)=>{this.nameCharInput = input}}/>
                    <input type="text" placeholder="Количество" ref={(input)=>{this.countCharInput = input}}/>
                    <input type="text" placeholder="БЕИ" ref={(input)=>{this.beiCharInput = input}}/>
                    <div ref ={(elem)=>{this.charsList = elem}}>
                        <CharReady chars = {this.props.chars.chars}/>
                    </div>
                </div>
                <button onClick={this.addChar.bind(this)}>Добавить характеристику</button>
            </div>
            <button onClick={this.addItem.bind(this)}>Создать итем</button>
        </div>;
    }
}

function mapStateToProps(store) {
    return {
        items: store.items,
        chars: store.chars
    }
}

export default connect (mapStateToProps)(NewItem);