import React, { Component } from 'react';
import './MainSection.scss';

import Card from './../card';

export default class MainSection extends Component {
    // amount of cards to render - comes from the amount of cryptos fetched.
    // predefined number of columns -4 at the moment.
    // dynamic number of rows - number of which will be total number of all cryptos fetched divide by 4(amount of columns).
render(){
    return(
    <div className='main-section'>
    <Card />
    </div>
    );
}
}