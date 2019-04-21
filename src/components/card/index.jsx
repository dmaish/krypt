/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Button from './../button';
import './Card.scss';

export default class MainSection extends Component {

    componentDidMount(){
        
    }

    renderTitle = (title, imageUrl) => (
        <div className='card-title'>
        <span className='crypto-logo' 
        style={{backgroundImage: `url(https://www.cryptocompare.com${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
        alt={`${imageUrl} flag`}
        >
        </span>
        <span className='crypto-title'>
        {title}
        </span >
        </div>
    );

    renderPrice = (price) => (
        <div className='card-price'>
        <span className='price-title title'>Price</span>
        <span className='actual-price'>{price}</span>
        </div>
    );

    renderMarketCap = (marketcap) => (
        <div className='market-cap'>
        <span className='market-cap-title title'>Market cap</span>
        <span className='actual-market-cap'>{marketcap}</span>
        </div>
    );

    renderVolume = (volume24hrs) => (
        <div className='volume'>
        <span className='market-volume-title title'>Volume (24hrs)</span>
        <span className='actual-volume'>{volume24hrs}</span>
        </div>
    );

    renderCirculating = (supply) => (
        <div className='circulating'>
        <span className='circulating-title title'>Supply</span>
        <span className='actual-circulating'>{supply}</span>
        </div>
    );

    renderDropRise = (change24hrs, changepercent24hrs) => (
    <div className='drop-rise'>
    <div className='1hr-drop-rise'>
    <span className='hr-drop-rise-title title'>
        change (24hrs)
    </span>
    <span>
        {change24hrs}
    </span>
    </div>
    <div className='24hr-drop-rise'>
    <span className='hrs-drop-rise-title title'>
        %
    </span>
    <span>
        {changepercent24hrs}%
    </span>
    </div>
    </div>
    );

    renderGraph = () => (
        <div className='card-graph'>
        </div>
    );

render(){
    const { title, price, volume24hrs, marketcap, supply, change24hrs, changepercent24hrs, imageUrl } = this.props;
    return(
    <div className='card'>
    {this.renderTitle(title, imageUrl)}
    {this.renderPrice(price)}
    {this.renderMarketCap(marketcap)}
    {this.renderVolume(volume24hrs)}
    {this.renderCirculating(supply)}
    {this.renderDropRise(change24hrs, changepercent24hrs)}
    {this.renderGraph()}
    <Button proppy='hey'/>
    </div>
    );

}
}