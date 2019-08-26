import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';
import axios from 'axios';

export default class ItemsEditActions{
    static addItem(charsList, nameItemInput, beiItemInput, compItem = []){
        //Если создается новый итем, не компонентный, приравняем компоненты к нуля
        //Принимаем Список характеристик, наименование итема, БЕИ итема и компонентов
        //Делаем объект 
        let item = {
            nameItem: nameItemInput,
            beiItem: beiItemInput,
            charsItem: charsList,
            compItem: compItem
        };
        //С помощью Аксиоса постим характеристики. Сервер должен вернуть объект с созданными характеристиками
        let backData = axios.post('http://localhost/items', item);
        //Пихаем все в объект
        let result = {
            type: ItemsEditConstants.ADD_ITEM,
            payload: backData
        }
        //Возвращаем экшн
        return result;
    }
}