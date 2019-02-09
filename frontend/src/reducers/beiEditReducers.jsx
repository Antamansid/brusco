import * as beiEditConstants from '../constans/beiEditConstants.jsx';

export function beiEditReducers(state = {}, action) {
    switch (action.type){
        //Отлавливаем Экшн по типу
        case beiEditConstants.GET_BEI_FULFILLED:{
            //Создаем пустой массив описаний характеристики
            let magnitude = [];
            //Создаем пустой массив названий характеристик
            let name = [];
            //Создаем пустой массив обозначений и мапим туда данные, полученные с сервера
            let designation = action.payload.data.map((value)=>{
                //Пушим описания в массив описаний
                magnitude.push(value.magnitude);
                //Пушим названия характеристик в массив с названиями
                name.push(value.name);
                //Возвращаем обозначения для пушинга в массив обозначений
                return value.designation;
            });
            //Создаем объект и в объекте указываем ссылки на полученные массивы
            let newRes = {
                    magnitude : magnitude,
                    name: name,
                    designation: designation
                }
            //Приравниваем стейт к полученному объекту
            state = newRes;
            break;
        }
    };
    return state;
}