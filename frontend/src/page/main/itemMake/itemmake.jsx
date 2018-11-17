import React from "react";
import $ from  "jquery";

import NewItem from "./newItem/newItem.jsx";
import FindItem from "./findItem/findItem.jsx";
import CompItem from "./compItem/compItem.jsx";

import itemsEditActions from "../../../actions/itemsEditActions.jsx"
import store from "../../../store/store.jsx";
import {connect} from "react-redux"


class ItemMake extends React.Component {
    render() {
        return <div>
            <h1>Сделать итем</h1>
            <NewItem/>
            <CompItem/>
            <FindItem/>
        </div>;
    }
}

function mapStateToProps(store) {
    return {
        items: store.items,
        chars: store.chars
    }
}

export default connect(mapStateToProps)(ItemMake);
