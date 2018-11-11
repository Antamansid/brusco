import React from "react";
import NewItem from "./NewItem.jsx";
import $ from  "jquery";

export default class ItemMake extends React.Component {
    render() {
        return <div>
            <h1>Сделать итем</h1>
            <NewItem/>
            <div id="compItem" className="ui-widget-content ui-state-default">
                <h2 className="ui-widget-header">Скомпоновать итем</h2>
                <div>
                    <input data-role = "" type="text" placeholder="Наименование Итема"/>
                    <input data-role = ""  type="text" placeholder="БЕИ"/>
                    <div id = "ItemMaker"></div>
                    <button>Создать итем</button>
                </div>
            </div>
            <div id="findItem" className="ui-widget-content ui-state-default">
                <h2 className="ui-widget-header">Поиск итема</h2>
            </div>
        </div>;
    }
}