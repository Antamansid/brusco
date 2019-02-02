import React from "react";
import ReactDOM from 'react-dom';

import Consoles from "./consoles/consoles.jsx";

import charsEditActions from "../../../../../actions/charsEditActions.jsx";
import beiEditActions from "../../../../../actions/beiEditActions.jsx";
import consolesEditActions from "../../../../../actions/consolesEditActions.jsx";


import store from "../../../../../store/store.jsx";
import {connect} from "react-redux";

class Chars extends React.Component {
    constructor(props){
        super(props);
    }
    addChar(){
        //диспатчим новый чар
        //Передаем объекты, чтобы в экшне все валуе задавались
        this.props.dispatch(charsEditActions.addCharPos(this.nameCharInput, this.countCharInput, this.charsConsoles));
    }
    render() {
        return  <div>
                    <input type="text" placeholder="Наименование характеристики" ref={(input)=>{this.nameCharInput = input}}/>
                    <input type="text" placeholder="Количество" ref={(input)=>{this.countCharInput = input}}/>
                    <Consoles consoles = {this.props.consoles.consoles} designation = {this.props.chars.designation}
                        ref ={(node) =>{this.charsConsoles = ReactDOM.findDOMNode(node)}}/>
                    <button onClick={this.addChar.bind(this)}>Добавить характеристику</button>
                </div>
        ;
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
        bei: store.bei,
        chars: store.chars,
        consoles: store.consoles
    }
}

export default connect (mapStateToProps)(Chars);