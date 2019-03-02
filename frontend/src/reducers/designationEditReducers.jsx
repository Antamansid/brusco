import * as designationEditConstants from '../constans/designationEditConstants.jsx';

export function designationEditReducers(state = {designation : ""}, action) {
    switch (action.type){
        //Отлавливаем Экшн по типу
        case designationEditConstants.GET_CONSOLES_CHAR:{
            //Приравниваем стейт к данным с пейлоад
            let designation = action.payload;
            state = {...state, designation};
            break;
        }
    };
    return state;
}