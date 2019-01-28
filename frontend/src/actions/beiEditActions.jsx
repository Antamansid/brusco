import * as beiEditConstants from '../constans/beiEditConstants.jsx';
import axios from 'axios';
import * as Settings from '../settings.jsx';

export default class beiEditActions{
    static getBei(){
        return{
            type: beiEditConstants.GET_BEI,
            //так как стоит мидлвара на промисы, тут ниче мудрить не надо, пускай так и остается
            payload: axios.get('http://localhost/chars').then((res)=>{
                let magnitude = [];
                let name = [];
                let designation = res.data.map((value)=>{
                    magnitude.push(value.magnitude);
                    name.push(value.name);
                    return value.designation;
                });
                let newRes = {
                    data: {
                        magnitude : magnitude,
                        name: name,
                        designation: designation
                    }
                }
                return newRes;
            })
        }
    };
}