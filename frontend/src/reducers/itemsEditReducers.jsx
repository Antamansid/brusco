import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export function itemsEditReducer(state = {items : []}, action) {
    switch (action.type){
        //отлавливаем Экшн по типу
        case ItemsEditConstants.ADD_ITEM:{
            //Пушим в стэйт новый итем
            let items = state.items;
            items.push(action.payload);
            state = {...state, items};
            break;
        }
    };
    return state;
}