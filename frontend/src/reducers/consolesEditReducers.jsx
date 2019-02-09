import * as consolesEditConstants from '../constans/consolesEditConstants.jsx';

export function consolesEditReducers(state = {}, action) {
    switch (action.type){
        //Отлавливаем экшн по типу
        case consolesEditConstants.GET_CONSOLES_FULFILLED:{
            //Создаем пустой массив цифрового обозначения приставки (10 в квадрате прим)
            let factor = [];
            //Создаем пустой массив приставко
            let consoles = [];
            //Создаем массив кратких приставко и мапим туда результат, полученный с сервера
            let designation = action.payload.data.map((value)=>{
                //Цифры пушим в цифры
                factor.push(value.factor);
                //Приставки пушим в приставки
                consoles.push(value.consoles);
                //Краткие приставкки возвращаем для автопушинга в массив
                return value.designation;
            });
            //Создаем новый объект
            let newRes = {
                //В объекте делаем ссылки на полученные массивы
                    factor : factor,
                    consoles: consoles,
                    designation: designation
            };
            //Приравниваем Стэйт к полученному объекту с массивами
            state = newRes;
            break;
        }
    };
    return state;
}