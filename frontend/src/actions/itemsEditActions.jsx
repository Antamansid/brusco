import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export default class ItemsEditActions{
    static addItem(charsList, nameItemInput, beiItemInput){
        //Принимаем Список характеристик, наименование итема, БЕИ итема
        //Делаем объект из Наименования, Беи и Массив характеристик
        let item = {
            nameItem: nameItemInput,
            beiItem: beiItemInput,
            charsItem: charsList
        };
        //Делаем объект экшн из Тип экшна: константа, Пэйлоад: итем
        let action = {
            type: ItemsEditConstants.ADD_ITEM,
            payload: item
        };
        //Возвращаем экшн
        return action;
    }
}