import * as ItemsEditConstants from '../constans/itemsEditConstants.jsx';

export function itemsEditReducer(state = {items: []}, action) {
    switch (action.type){
        case ItemsEditConstants.ADD_ITEM:{
            let items = state.items;
            items.push(action.payload);
            state = {...state, items}
            break;
        }
    };
    return state;
}