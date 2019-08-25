import * as beiEditConstants from '../constans/beiEditConstants.jsx';

export function beiEditReducers(state = {bei:{}}, action) {
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
            state = {...state, bei: newRes}
            break;
        };
        //Когда новая характеристика добавлена в базу
        case beiEditConstants.MAKE_NEW_BEI_FULFILLED:{
            //забираем Базовые характеристики со стейта
            let newBei = state.bei;
            //Пушим название новой характеристики
            newBei.magnitude.push(action.payload.data.magnitude);
            //Пушим стандартное название. Приравниваем его к обычному названию
            newBei.name.push(action.payload.data.magnitude);
            //Пушим единицу измерения
            newBei.designation.push(action.payload.data.designation);
            //Обновляем стейт
            state = {...state, bei:newBei};
        }
    };
    return state;
}