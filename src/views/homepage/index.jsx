import React, {Component, Fragment} from 'react';
import {Navbar} from './../../components/NavBar';
import {LeftSideBar} from './../../components/LeftSideBar';

export class Homepage extends Component{

    renderNavBar(){
        return ( <Navbar /> );
    }

    renderLeftSideBar(){
        return ( <LeftSideBar /> )
    }

render(){
    return(
    <div>
        <Fragment>
            {this.renderNavBar()}
            {this.renderLeftSideBar()}
        </Fragment>
    </div>
    )
}
}