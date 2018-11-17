import {createStore, combineReducers} from 'redux';

import {itemsEditReducer} from "../reducers/itemsEditReducers.jsx";
import {charsEditReducers} from "../reducers/charsEditReducers.jsx";


const reducers = combineReducers({
    items: itemsEditReducer,
    chars: charsEditReducers
});

const store = createStore(reducers);

export default store;