import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export default class ItemsEditActions{
    static addItem(){
        return{
            type: ItemsEditConstants.ADD_ITEM,
            payload: ()=>{
                console.log("something")
            }
        }
    }
}