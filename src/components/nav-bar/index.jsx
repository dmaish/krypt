/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './Navbar.scss';

export class Navbar extends Component {
    render(){
        return(
        // <!-- Always shows a header, even in smaller screens. -->
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
            {/* <!-- Title --> */}
            <span className="mdl-layout-title">krypt</span>
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <div className="mdl-layout-spacer"></div>
            {/* <!-- Navigation. We hide it in small screens. --> */}
            <nav className="mdl-navigation "> 
            <a className="mdl-navigation__link" href="">comparison</a>
            <a className="mdl-navigation__link" href="">prices</a>
            <a className="mdl-navigation__link" href="">history</a>
            <a className="mdl-navigation__link" href="">news</a>
            </nav> 
        </div>
        </header>
        <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">navigation</span>
        <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">comparison</a>
            <a className="mdl-navigation__link" href="">prices</a>
            <a className="mdl-navigation__link" href="">history</a>
            <a className="mdl-navigation__link" href="">news</a>
        </nav>
        </div>
        <main className="mdl-layout__content">
        <div className="page-content">
        {/* <!-- Your content goes here --> */}
        </div>
        </main>
        </div>
        );
    }
}