import * as consolesEditConstants from '../constans/consolesEditConstants.jsx';
import axios from 'axios';
import * as Settings from '../settings.jsx';

export default class consolesEditActions{
    static getConsoles(){
        return{
            type: consolesEditConstants.GET_CONSOLES,
            //так как стоит мидлвара на промисы, тут ниче мудрить не надо, пускай так и остается
            payload: axios.get('http://localhost/consoles').then((res)=>{
                let factor = [];
                let consoles = [];
                let designation = res.data.map((value)=>{
                    factor.push(value.factor);
                    consoles.push(value.consoles);
                    return value.designation;
                });
                let newRes = {
                    data: {
                        factor : factor,
                        consoles: consoles,
                        designation: designation
                    }
                }
                return newRes;
            })
        }
    };
}