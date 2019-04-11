import React, {Component} from 'react';
// import { retractSlider } from './../../redux/actionCreator/homePageActions';
import './Navbar.scss';

export class Navbar extends Component {


    render() {
    return (
    <div className="main-nav">
        <i class="fas fa-bars"></i>
        <div className="app-title">
                <span>crypto_`</span>
            </div>
    </div>
    );
    }
}
