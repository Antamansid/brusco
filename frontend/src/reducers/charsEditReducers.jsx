import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export function charsEditReducers(state = {chars: []}, action) {
    switch (action.type){
        //Отлавливаем Экшн по типу
        case charsEditConstants.ADD_CHAR_POS:{
            let chars = state.chars;
            //Пушим в стэйт новую характеристику
            chars.push(action.payload);
            let designation = "";
            state = {...state, chars, designation}
            break;
        };
        //Отлавливаем Экшн по типу
        case charsEditConstants.CLEAR_CHARS:{
            let chars = [];
            //Чистим стэйт
            state = {...state, chars}
            break;
        };
        //Хороший программист тут допилит экшны на пендинг и реджектед
        case charsEditConstants.GET_CHARS_FULFILLED:{
            let oldChars = state.chars;
            let chars = oldChars.concat(action.payload.data);

            state = {...state, chars};
            break;
        };
    };
    return state;
}