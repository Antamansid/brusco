import React from "react";
import $ from  "jquery";

import NewItem from "./newItem/newItem.jsx";
import FindItem from "./findItem/findItem.jsx";
import CompItem from "./compItem/compItem.jsx";


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