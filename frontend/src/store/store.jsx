//Импорт основных функций из редакса
import {createStore, combineReducers, applyMiddleware} from 'redux';

//Импорт редюсеров
import {itemsEditReducer} from "../reducers/itemsEditReducers.jsx";
import {charsEditReducers} from "../reducers/charsEditReducers.jsx";
import {beiEditReducers} from "../reducers/beiEditReducers.jsx";
import {consolesEditReducers} from "../reducers/consolesEditReducers.jsx";
import {designationEditReducers} from "../reducers/designationEditReducers.jsx";

//Импорт мидлвар
//Логер в консоль браузера
import logger from 'redux-logger';
//Мидлвара для работы с аксиосом (пока только для него, а то с промисами и диспатчами головная боль)
import promiseMiddleware from 'redux-promise-middleware';

//Объеденяем мидлвар весь
const middleware = applyMiddleware(promiseMiddleware(), logger());

//Комбинем редюсеры
const reducers = combineReducers({
    items: itemsEditReducer,
    chars: charsEditReducers,
    bei: beiEditReducers,
    consoles: consolesEditReducers,
    designation: designationEditReducers
});

//Создаем стор из редюсеров и мидлвара
const store = createStore(reducers, middleware);

//Экспортируем стор дефолтом
export default store;