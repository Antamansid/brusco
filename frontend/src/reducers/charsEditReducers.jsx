import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export function charsEditReducers(state = {chars:[]}, action) {
    switch (action.type){
        //Отлавливаем Экшн по типу
        case charsEditConstants.ADD_CHAR_POS:{
            //Пушим в стэйт новую характеристику
            let chars = state.chars;
            chars.push(action.payload);
            state = {...state, chars};
            break;
        };
        //Отлавливаем Экшн по типу
        case charsEditConstants.CLEAR_CHARS:{
            let chars = [];
            //Чистим стэйт
            state = {...state, chars}
            break;
        };
    };
    return state;
}