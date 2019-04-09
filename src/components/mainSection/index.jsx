import React, { Component } from 'react';
import './MainSection.scss';

import Card from './../card';

export default class MainSection extends Component {
render(){
    return(
    <div className='main-section'>
    <Card />
    </div>
    );
}
}