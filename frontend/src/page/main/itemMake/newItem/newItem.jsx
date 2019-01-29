import React from "react";
import ReactDOM from 'react-dom';

import CharReady from "./charReady/charReady.jsx"
import Consoles from "./consoles/consoles.jsx"

import itemsEditActions from "../../../../actions/itemsEditActions.jsx";
import charsEditActions from "../../../../actions/charsEditActions.jsx";
import beiEditActions from "../../../../actions/beiEditActions.jsx";
import consolesEditActions from "../../../../actions/consolesEditActions.jsx";
import store from "../../../../store/store.jsx";
import {connect} from "react-redux";


class NewItem extends React.Component {
    constructor(props){
        super(props);
    }
    addChar(){

        //диспатчим новый чар
        //Передаем объекты, чтобы в экшне все валуе задавались
        this.props.dispatch(charsEditActions.addCharPos(this.nameCharInput, this.countCharInput, this.charsConsoles));
    }
    addItem(){
        //Создаем итем
        this.props.dispatch(itemsEditActions.addItem(this.charsList, this.nameItemInput, this.beiItemInput));
        //Чистим характеристики
        this.props.dispatch(charsEditActions.clearChars());

    }
    render() {
        return <div>
            <div id="makeItem" className="ui-widget-content ui-state-default">
                <h2 className="ui-widget-header">Создать вещь</h2>
                <input type="text" placeholder="наименование итема" ref={(input)=>{this.nameItemInput = input}}/>
                <input type="text" placeholder="БЕИ итема" ref={(input)=>{this.beiItemInput = input}}/>
                <div>
                    <input type="text" placeholder="Наименование характеристики" ref={(input)=>{this.nameCharInput = input}}/>
                    <input type="text" placeholder="Количество" ref={(input)=>{this.countCharInput = input}}/>
                    <Consoles consoles = {this.props.consoles.consoles} designation = {this.props.chars.designation}
                              ref ={(node) =>{this.charsConsoles = ReactDOM.findDOMNode(node)}}/>
                    <CharReady chars = {this.props.chars.chars} ref ={(node)=>{this.charsList = ReactDOM.findDOMNode(node)}}/>
                </div>
                <button onClick={this.addChar.bind(this)}>Добавить характеристику</button>
            </div>
            <button onClick={this.addItem.bind(this)}>Создать итем</button>
        </div>;
    }
    componentDidMount(){
        this.props.dispatch(beiEditActions.getBei()).then(()=>{
            this.props.dispatch(consolesEditActions.getConsoles()).then(()=>{
                $(this.nameCharInput).autocomplete(
                    {
                        source: this.props.bei.bei.magnitude,
                        select: (event, ui)=>{
                            if(this.props.bei.bei.magnitude){
                                let ind = this.props.bei.bei.magnitude.indexOf(ui.item.value);
                                this.props.dispatch(charsEditActions.getConsolesFromChar(this.props.bei.bei.designation[ind]));
                            }
                        }
                    }
                );
            });
        });
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