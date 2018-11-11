import React from "react";

export default class CompItem extends React.Component {
    render() {
        return <div>
                <div id="compItem" className="ui-widget-content ui-state-default">
                    <h2 className="ui-widget-header">Скомпоновать итем</h2>
                    <div>
                        <input data-role = "" type="text" placeholder="Наименование Итема"/>
                        <input data-role = ""  type="text" placeholder="БЕИ"/>
                        <div id = "ItemMaker"></div>
                        <button>Создать итем</button>
                    </div>
                </div>
            </div>;
    }
}