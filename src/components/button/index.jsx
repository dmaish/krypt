import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {


    render (){
        return(
            <div className='btn'>
            <div>
            <i class="fas fa-caret-down"></i>
            <span className='btn-title'>
            more
            </span>
            </div>
            </div>
        );
    }
}