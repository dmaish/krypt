/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Button from './../button';
import './Card.scss';

export default class MainSection extends Component {

    componentDidMount(){
        
    }

    renderTitle = () => (
        <div className='card-title'>
        <span className='crypto-logo'>B
        </span >
        <span className='crypto-title'>
        Etherium
        </span >
        </div>
    );

    renderPrice = () => (
        <div className='card-price'>
        <span className='price-title title'>Price</span>
        <span className='actual-price'>$ 3,954.76</span>
        </div>
    );

    renderMarketCap = () => (
        <div className='market-cap'>
        <span className='market-cap-title title'>Market cap</span>
        <span className='actual-market-cap'>$ 3,954.76</span>
        </div>
    );

    renderVolume = () => (
        <div className='volume'>
        <span className='market-volume-title title'>Volume (24hrs)</span>
        <span className='actual-volume'>$ 10,712,254,026	</span>
        </div>
    );

    renderCirculating = () => (
        <div className='circulating'>
        <span className='circulating-title title'>Circulating</span>
        <span className='actual-circulating'>$ 105,594,669</span>
        </div>
    );

    renderDropRise = () => (
    <div className='drop-rise'>
    <div className='1hr-drop-rise'>
    <span className='hr-drop-rise-title title'>
        1hr
    </span>
    <span>
        0.05%
    </span>
    </div>
    <div className='24hr-drop-rise'>
    <span className='hrs-drop-rise-title title'>
        24hr
    </span>
    <span>
        0.40%
    </span>
    </div>
    </div>
    );

    renderGraph = () => (
        <div className='card-graph'>
        </div>
    );

render(){
    return(
    <div className='card'>
    {this.renderTitle()}
    {this.renderPrice()}
    {this.renderMarketCap()}
    {this.renderVolume()}
    {this.renderCirculating()}
    {this.renderDropRise()}
    {this.renderGraph()}
    <Button proppy='hey'/>
    </div>
    );

}
}