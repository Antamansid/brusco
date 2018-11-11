import {createStore, combineReducers} from 'redux';

import {navReducer} from '../reducers/navReducer.jsx';

const reducers = combineReducers({
    navs: navReducer
});

const store = createStore(reducers);

export default store;