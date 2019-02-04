import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export function charsEditReducers(state = {chars: []}, action) {
    switch (action.type){
        case charsEditConstants.ADD_CHAR_POS:{
            let chars = state.chars;
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
            //Задача состоит в объединении массивов уже имеющихся характеристик с характеристиками с бэкэнда
            //Хотя стоит подумать надо ли это.
            //Каждый раз при заходе на эту страницу стор будет забиваться дубликатами
            //Исправить! пускай 1 раз чекает!
            //А лучше всего сделать все по правилам и контент запилить в качестве объекта реакта
            let oldChars = state.chars;
            let chars = oldChars.concat(action.payload.data);

            state = {...state, chars};
            break;
        }
        case charsEditConstants.GET_CONSOLES_CHAR:{
            let designation = action.payload;
            state = {...state, designation};
            break;
        }
    };
    return state;
}