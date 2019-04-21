import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './../../redux/store/store'
import Routes from './../../routes';

import './../../../node_modules/material-design-lite/material';
import './App.scss'; 

export class App extends Component{

render(){
    return(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    )
}
}