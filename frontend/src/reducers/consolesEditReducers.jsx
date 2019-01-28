import * as consolesEditConstants from '../constans/consolesEditConstants.jsx';

export function consolesEditReducers(state = {consoles: []}, action) {
    switch (action.type){
        case consolesEditConstants.GET_CONSOLES_FULFILLED:{
            let consoles = action.payload.data;
            state = {...state, consoles};
            break;
        }
    };
    return state;
}