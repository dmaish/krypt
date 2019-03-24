import React, {Component} from 'react';
import { Provider } from 'react-redux'
import ConnectedHomepage  from './../homepage';
import store from './../../redux/store/store'

import './../../../node_modules/material-design-lite/material';
import './App.scss'; 

export class App extends Component{

render(){
    return(
<Provider store={store}>
    <div>
        <ConnectedHomepage />
    </div>
    </Provider>
    )
}
}