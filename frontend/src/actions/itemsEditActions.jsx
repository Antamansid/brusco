import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export default class ItemsEditActions{
    static addItem(item){
        return{
            type: ItemsEditConstants.ADD_ITEM,
            payload: item
        }
    }
}