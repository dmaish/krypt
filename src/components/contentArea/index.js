import React, {Component} from 'react'; 
import { LeftSideBar } from './../LeftSideBar';
import MainSection from './../mainSection';
import './SideBarContentAreaContainer.scss';

export class SideBarAndContentAreaContainer extends Component {
render(){
    return(
    <div className="SideBarContentAreaContainer">
        <LeftSideBar />
        <MainSection />
    </div>
    )
}
}