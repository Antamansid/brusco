import * as beiEditConstants from '../constans/beiEditConstants.jsx';
import axios from 'axios';
import * as Settings from '../settings.jsx';

export default class beiEditActions{
    static getBei(){
        //Создаем переменную, куда гетим комплект характеристик с сервера
        let data = axios.get('http://localhost/chars');
        //Делаем объект экшн из Тип экшна: константа Пэйлоад: переменная с данными с сервера
        let result = {
            type: beiEditConstants.GET_BEI,
            payload: data
        }
        //Возвращаем экшн
        return result
    };
}