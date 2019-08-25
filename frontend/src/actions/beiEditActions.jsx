import * as beiEditConstants from '../constans/beiEditConstants.jsx';
import axios from 'axios';
import * as Settings from '../settings.jsx';

//Здесь Базовые характеристики!
export default class beiEditActions{
    //Забираем их с сервера
    static getBei(){
        //Создаем переменную, куда гетим комплект характеристик с сервера
        let data = axios.get('http://localhost/chars');
        //Делаем объект экшн из Тип экшна: константа Пэйлоад: переменная с данными с сервера
        let result = {
            type: beiEditConstants.GET_BEI,
            payload: data
        }
        //Возвращаем экшн
        return result;
    };
    //Экшн с созданием новой базовой характеристики
    static makeNewBei(magnitude, designation){
        //Для передачи на сервер джейсоним их
        let data = {magnitude, designation};
        //С помощью Аксиоса постим характеристики. Сервер должен вернуть объект с созданными характеристиками
        let backData = axios.post('http://localhost/chars', data);
        //Пихаем все в объект
        let result = {
            type: beiEditConstants.MAKE_NEW_BEI,
            payload: backData
        }
        //Возвращаем экшн
        return result;
    }
}