import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export default class charsEditActions{
    static addCharPos(nameCharInput, countCharInput, beiCharInput){
        let newChar = {nameCharInput, countCharInput, beiCharInput};
        return{
            type: charsEditConstants.ADD_CHAR_POS,
            payload: newChar
        }
    }
}