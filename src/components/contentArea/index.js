import React, {Component} from 'react'; 
import { LeftSideBar } from './../LeftSideBar';
import './ContentArea.scss';

export class ContentArea extends Component {

render(){
    return(
    <div className="main-content-area">
        <LeftSideBar />;
    </div>
    )
}
}