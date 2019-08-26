import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export default class charsEditActions{
    static addCharPos(countChar, beiChar, idChar){
        //Ввод Имя характеристики
        //Ввод Количества
        //Ввод БЕИ
        //Делаем объект из Имени характеристики Количества БЕИ
        let newChar = {
            idChar,
            countChar,
            beiChar
        };
        //Делаем объект экшн из Тип экшна: константа Пэйлоад: объект характеристики
        let action = {
            type: charsEditConstants.ADD_CHAR_POS,
            payload: newChar
        };
        //Возвращаем экшн
        return action;
    };
    static clearChars(){
        //Делаем объект экшн из Тип экшна: константа пэйлоад не нужен
        let action = {
            type: charsEditConstants.CLEAR_CHARS
        }
        //Возвращаем экшн
        return action;
    };
}