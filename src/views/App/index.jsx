import React, {Component} from 'react';
import { Homepage } from './../homepage';

import './../../../node_modules/material-design-lite/material';
import 'antd/dist/antd.css'; 

export class App extends Component{

render(){
    return(
    <div>
        <Homepage />
    </div>
    )
}
}