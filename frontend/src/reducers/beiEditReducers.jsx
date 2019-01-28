import * as beiEditConstants from '../constans/beiEditConstants.jsx';

export function beiEditReducers(state = {bei: []}, action) {
    switch (action.type){
        case beiEditConstants.GET_BEI_FULFILLED:{
            let bei = action.payload.data;
            state = {...state, bei};
            break;
        }
    };
    return state;
}