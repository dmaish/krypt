/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'; 
import './LeftSideBar.scss';

export class LeftSideBar extends Component {

navBarContents = () => {
    return(
        <div className="menu">
            <li className="item" id="prices">
                <a href="#prices" className="button">
                <i class="fas fa-tags">
                <span>prices</span>
                </i>
                </a> 
                    <div className="small-menu">
                        <a href="#">Bitcoin</a>
                        <a href="#">Monero</a>
                        <a href="#">Bitcoin</a>
                    </div>
            </li>
            <li className="item" id="comparison">
                <a href="#comparison" className="button">
                <i class="fas fa-greater-than-equal"> 
                <span>Comparison</span>
                </i>
                </a>
                    <div className="small-menu">
                        <a href="#">Bitcoin</a>
                        <a href="#">Monero</a>
                        <a href="#">Bitcoin</a>
                    </div>
                
            </li>
            <li className="item" id="history">
                <a href="#history" className="button">
                <i class="fas fa-file-medical-alt">
                <span>History</span>
                </i>
                </a> 
                    <div className="small-menu">
                        <a href="#">Bitcoin </a>
                        <a href="#">Monero </a>
                        <a href="#">Bitcoin </a>
                    </div>
                
            </li>
            <li className="item" id="news">
                <a href="#news" className="button">
                <i class="fas fa-newspaper"> 
                <span>News</span>
                </i> 
                </a>
                    <div className="small-menu">
                        <a href="#">Dineri </a>
                        <a href="#">Monero </a>
                        <a href="#">Mint </a>
                    </div>
            </li>
        </div>
    )
}

render() {
return (
<div className="left-nav-bar">
    {this.navBarContents()}
</div>
);
}
}