import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export function charsEditReducers(state = [], action) {
    switch (action.type){
        //Отлавливаем Экшн по типу
        case charsEditConstants.ADD_CHAR_POS:{
            //Пушим в стэйт новую характеристику
            state.push(action.payload);
            break;
        };
        //Отлавливаем Экшн по типу
        case charsEditConstants.CLEAR_CHARS:{
            //Чистим стэйт
            state = [];
            break;
        };
    };
    return state;
}