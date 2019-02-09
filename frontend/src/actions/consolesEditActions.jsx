import * as consolesEditConstants from '../constans/consolesEditConstants.jsx';
import axios from 'axios';
import * as Settings from '../settings.jsx';

export default class consolesEditActions{
    static getConsoles(){
        //Создаем переменную, куда пихаем приставки (к примеру мили или гига) с сервера
        let data = axios.get('http://localhost/consoles');
        //Делаем объект экшн из Тип экшна: константа Пэйлоад: переменная с приставками с сервера
        let result = {
            type: consolesEditConstants.GET_CONSOLES,
            payload: data
        };
        //Возвращаем экшн
        return result
    };
}