import * as designationEditConstants from '../constans/designationEditConstants.jsx';

export default class beiEditActions{
    static getConsolesFromChar(designation){
        //Делаем объект экшн из Тип экшна: константа Пэйлоад: обозначение (к примеру метр)
        let result = {
            type: designationEditConstants.GET_CONSOLES_CHAR,
            payload: designation
        };
        //Возвращаем экшн
        return result
    };
}