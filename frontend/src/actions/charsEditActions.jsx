import * as charsEditConstants from '../constans/charsEditConstants.jsx';
import * as Settings from '../settings.jsx'

export default class charsEditActions{
    static addCharPos(nameCharInput, countCharInput, beiCharInput){
        let newChar = {
            nameCharInput : nameCharInput.value,
            countCharInput: countCharInput.value,
            beiCharInput: beiCharInput.value
        };
        nameCharInput.value = "";
        countCharInput.value = "";
        return{
            type: charsEditConstants.ADD_CHAR_POS,
            payload: newChar
        }
    };
    static clearChars(){
        return{
            type: charsEditConstants.CLEAR_CHARS
        }
    };
    static getConsolesFromChar(designation){
        return{
            type: charsEditConstants.GET_CONSOLES_CHAR,
            payload: designation
        }
    };
}