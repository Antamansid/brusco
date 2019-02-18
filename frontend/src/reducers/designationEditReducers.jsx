import * as designationEditConstants from '../constans/designationEditConstants.jsx';

export function designationEditReducers(state = {designation : ""}, action) {
    switch (action.type){
        //Отлавливаем Экшн по типу
        case designationEditConstants.GET_CONSOLES_CHAR:{
            //Приравниваем стейт к данным с пейлоад
            state.designation = action.payload;
            break;
        }
    };
    return state;
}