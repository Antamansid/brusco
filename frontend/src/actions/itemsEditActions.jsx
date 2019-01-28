import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export default class ItemsEditActions{
    static addItem(charsList, nameItemInput, beiItemInput){
        let itemChars = [];
        for (let i = 0; i < charsList.childNodes.length; i++){
            itemChars.push({nameChar: charsList.childNodes[i].childNodes[0].textContent,
                countChar: charsList.childNodes[i].childNodes[2].textContent,
                beiChar: charsList.childNodes[i].childNodes[3].textContent})

        }
        let item = {
            nameItem: nameItemInput.value,
            beiItem: beiItemInput.value,
            charsItem: itemChars
        };
        nameItemInput.value = "";
        beiItemInput.value = "";
        return{
            type: ItemsEditConstants.ADD_ITEM,
            payload: item
        }
    }
}