import * as charsEditConstants from '../constans/charsEditConstants.jsx';
import * as Settings from '../settings.jsx'

export default class charsEditActions{
    static addCharPos(nameCharInput, countCharInput, beiCharInput){
        let newChar = {
            nameChar : nameCharInput.value,
            countChar: countCharInput.value,
            beiChar: beiCharInput.value
        };
        nameCharInput.value = "";
        countCharInput.value = "";
        return{
            type: charsEditConstants.ADD_CHAR_POS,
            payload: newChar
        }
    };
    static clearChars(){
        //Делаем объект экшн из Тип экшна: константа пэйлоад не нужен
        let action = {
            type: charsEditConstants.CLEAR_CHARS
        }
        //Возвращаем экшн
        return action;
    };
    static getConsolesFromChar(designation){
        return{
            type: charsEditConstants.GET_CONSOLES_CHAR,
            payload: designation
        }
    };
}