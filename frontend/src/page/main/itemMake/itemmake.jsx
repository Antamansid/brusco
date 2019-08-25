import React from "react";

import NewItem from "./NewItem/NewItem.jsx";
import FindItem from "./FindItem/FindItem.jsx";
import CompItem from "./CompItem/CompItem.jsx";

export default class ItemMake extends React.Component {
    render() {
        return <div>
            <h1>Сделать итем</h1>
            <NewItem/>
            <CompItem/>
            <FindItem/>
        </div>;
    }
}
