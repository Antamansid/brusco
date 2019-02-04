import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export function itemsEditReducer(state = [], action) {
    console.log(action);
    switch (action.type){
        //отлавливаем Экшн по типу
        case ItemsEditConstants.ADD_ITEM:{
            console.log(action)
            //Пушим в стэйт новый итем
            state.push(action.payload);
            break;
        }
    };
    return state;
}