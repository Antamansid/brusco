import * as charsEditConstants from '../constans/charsEditConstants.jsx';

export function charsEditReducers(state = {chars: []}, action) {
    switch (action.type){
        case charsEditConstants.ADD_CHAR_POS:{
            let chars = state.chars;
            chars.push(action.payload);
            state = {...state, chars}
            break;
        }
    };
    return state;
}