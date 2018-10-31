import {CHANGED_NAV} from '../constans/navConstants.jsx'

export default class NavActions {
    static changeNav(element){
        return{
            type: CHANGED_NAV,
            payload: element
        }
    }
}