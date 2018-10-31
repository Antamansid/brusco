import * as navConstans from '../constans/navConstants.jsx';
import $ from 'jquery';


export function navReducer(state = {checkedLink: ""}) {
    switch (action.type){
        case navConstans.CHANGED_NAV: {
            $(action.payload).parent().children().removeClass("active");
            $(action.payload).addClass("active");
            state = {...state, checkedLink: action.payload};
            break;
        }
    }
    return state;
}