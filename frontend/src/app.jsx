//Реакт
import React from 'react';
import ReactDOM from 'react-dom';
//Основные страницы
import Page from './Page/Page.jsx';
//Редакс
import store from './store/store.jsx';
import {Provider} from 'react-redux';
//Роутер
import {HashRouter} from 'react-router-dom';
//Куда пихаем Реакт-приложение
const app = document.getElementById('main');

ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Page/>
            </HashRouter>            
        </Provider>
    , app);