import React from "react";
import ReactDOM from 'react-dom';
import "jquery-ui/ui/widgets/autocomplete";

import Consoles from "./Consoles/Consoles.jsx";

import charsEditActions from "../../../../../actions/charsEditActions.jsx";
import beiEditActions from "../../../../../actions/beiEditActions.jsx";
import consolesEditActions from "../../../../../actions/consolesEditActions.jsx";
import designationEditActions from "../../../../../actions/designationEditActions.jsx";


import store from "../../../../../store/store.jsx";
import {connect} from "react-redux";

class Chars extends React.Component {
    constructor(props){
        super(props);
    }
    addChar(){
        if(this.nameCharInput.value !== "" && this.countCharInput.value !== ""){
            //Так как летит промис, исполнение кода пойдет дальше и поля формы очистятся, поэтому пихаем все в переменные
            let nameChar = this.nameCharInput.value;
            let countChar = this.countCharInput.value;
            let charsConsoles = this.charsConsoles.value;
            let idChar = -1;
            //Получаем порядковый номер из массива характеристик
            let idCharInMassiv = this.props.bei.bei.magnitude.indexOf(nameChar);
            //Проверяем новая ли характеристика
            //Если новая - добавляем в базу
            //Если не новая - ничего не делаем
            //indexOf возвращает число от 0 и более для значения из массива, и -1 если его (значения) нет
            if(idCharInMassiv < 0){
                //диспатчим добавление характеристики в базу
                this.props.dispatch(beiEditActions.makeNewBei(nameChar, charsConsoles)).then(()=>{
                    //Получаем порядковый номер из массива характеристик
                    idCharInMassiv = this.props.bei.bei.magnitude.indexOf(nameChar);
                    //Получаем айди характеристики
                    idChar = this.props.bei.bei.id[idCharInMassiv];
                    //диспатчим добавление характеристики
                    this.props.dispatch(charsEditActions.addCharPos(countChar, charsConsoles, idChar));
                })
            } else {
                //Получаем айди характеристики
                idChar = this.props.bei.bei.id[idCharInMassiv];
                //Если айди есть - просто диспатчим характеристику
                this.props.dispatch(charsEditActions.addCharPos(countChar, charsConsoles, idChar));
            }
            //Очистить поле имени Характеристики
            this.nameCharInput.value = "";
            //Очистить поле количества Характеристики
            this.countCharInput.value = "";
            //Очистить поле БЕИ  характеристики
            this.charsConsoles.value = "";
        }

    }
    fillUp(){
        //Создаем переменную и пихаем в нее экшн с с запросом на комплект характеристик
        let getBei = beiEditActions.getBei();
        // Диспатчим Экшн 
        this.props.dispatch(getBei).then(()=>{
            //Создаем переменную и пихаем в нее экшн с геттера на Приставки к ЕИ
            let getConsoles = consolesEditActions.getConsoles();
            //Диспатчим Экшн 
            this.props.dispatch(getConsoles).then(()=>{
                //Вешаем с помощью jquery автокомплект на инпут
                $(this.nameCharInput).autocomplete(
                    {
                        //Источник указываем полученный массив из комплекта характеристик
                        source: this.props.bei.bei.magnitude,
                        //При выборе характеристики бросаем эвент
                        select: (event, ui)=>{
                            //Если вcе ок
                            if(this.props.bei.bei.designation){
                                //Получаем индекс из массива выбранного пользователем Характеристики
                                let ind = this.props.bei.bei.magnitude.indexOf(ui.item.value);
                                //Теперь надо единицу измерения определить. Создаем переменную в которую пихаем экшн с выбранной характеристикой. 
                                //В этот экшн передаем обозначение выбранной характеристики
                                let desig = designationEditActions.getConsolesFromChar(this.props.bei.bei.designation[ind]);
                                //Диспатчим эту переменную
                                this.props.dispatch(desig);
                            }
                        }
                    }
                );
            });
        });
    }
    render() {
        return  <div>
                    <input type="text" placeholder="Наименование характеристики" ref={(input)=>{this.nameCharInput = input}}/>
                    <input type="text" placeholder="Количество" ref={(input)=>{this.countCharInput = input}}/>
                    <Consoles ref ={(node) =>{this.charsConsoles = ReactDOM.findDOMNode(node)}}/>
                    <button onClick={this.addChar.bind(this)}>Добавить характеристику</button>
                </div>
        ;
    }
    componentWillMount(){
        //При загрузке страницы заполняем автокомплект 
        this.fillUp();
    }
}

function mapStateToProps(store) {
    return {
        bei: store.bei
    }
}

export default connect (mapStateToProps)(Chars);