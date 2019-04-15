import React, { Component } from 'react';
import Card from './../card';
import { connect } from 'react-redux';
import './cardsContainer.scss';

export class CardsContainer extends Component {

    renderCards = (someList) => (
        someList.map( (item) => {
            return (
                <div key={item}>
                    <Card />
                </div>
        )
            }
        )
    )

    render(){
        return(
            <div className='cards-container'>
                {this.renderCards([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allCurrencies: state
});

export default connect(
    mapStateToProps,
    null,
)(CardsContainer)

