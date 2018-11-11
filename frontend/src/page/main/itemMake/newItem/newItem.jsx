import React from "react";
import $ from  "jquery";
import "jquery-ui";

export default class NewItem extends React.Component {
    render() {
        return <div>
            <div id="makeItem" className="ui-widget-content ui-state-default">
                <h2 className="ui-widget-header">Создать итем</h2>
                <input data-role = "ItemName" type="text"/>
                <div data-role = "Char">
                    <input data-role = "nameChar" type="text" placeholder="Наименование характеристики"/>
                    <input data-role = "countChar"  type="text" placeholder="Количество"/>
                    <input data-role = "beiChar"  type="text" placeholder="БЕИ"/>
                    <div data-role = "CharReady"></div>
                </div>
                <button onClick={addChar}>Добавить характеристику</button>
            </div>
            <button onClick={addItem}>Создать итем</button>
        </div>;
    }
}

function addChar(event){
    //Получаем элемент с характеристиками через евент таргет>родитель>контейнер с инпутами
    const $parent = $(event.target).parent();
    const $char = $parent.children('[data-role = "Char"]');
    const $charReady = $parent.children('[data-role = "CharReady"]');
    const $nameChar = $char.children('[data-role = "nameChar"]');
    const $countChar = $char.children('[data-role = "countChar"]');
    const $beiChar = $char.children('[data-role = "beiChar"]');
    $charReady.append(`<div>
        <span data-type = "nameChar">${nameChar.val()}</span>:
        <span data-type = "countChar">${countChar.val()}</span>
        <span data-type = "beiChar">${beiChar.val()}</span>    
    </div>`);
    $nameChar.val("");
    $countChar.val("");
    $beiChar.val("");
};
function addItem(event)=>{
    let newItem = document.createElement("div");
    newItem.setAttribute("data-id", "id1");
    $(newItem).append(`<h3>${$('[data-role = "ItemName"]').val()}</h3>`);
    $(newItem).append(`<div>${$('[data-role = "CharReady"]').html()}</div>`);
    $(newItem).draggable({
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
    });
    $("#compItem").droppable({
        accept: "div",
        drop: function( event, ui ) {
            ui.draggable.appendTo("#ItemMaker");
        }
    });
    $(newItem).appendTo("#findItem");
    $("#makeItem").children('[data-role = "ItemName"]').val("");
    $("#makeItem").children('[data-role = "Char"]').children('[data-role = "CharReady"]').html("");
}