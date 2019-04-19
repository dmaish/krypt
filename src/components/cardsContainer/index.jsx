import React, { Component } from 'react';
import Card from './../card';
import { connect } from 'react-redux';
import './cardsContainer.scss';

export class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFetchingFromApi: true,
            allCurrencies: [],
        };
    }

    componentDidMount(){
        

        console.log('this.props'.repeat(2), this.props);

    }

    componentDidUpdate(prevProps){
        console.log('prevProps in componentDidUpdate', prevProps);
        console.log('this.props---------'.repeat(2), this.props);
        const { homePageState } = this.props
        if ( prevProps.homePageState !== homePageState ){
            this.setState(
                    (prevState => {
                        return {
                            ...prevState,
                            ...homePageState.homePage
                        }
                    })
                );
        }
        
        console.log('+'.repeat(10), this.state);
    }
    

    renderCards = () => {
        const { isFetchingFromApi, allCurrencies } = this.state;
        if (!isFetchingFromApi){
            const displayCurrency = allCurrencies[0].DISPLAY;
            console.log('monero', displayCurrency.ADA);
            return Object.keys(displayCurrency).map( (item) => {
                return (
                    <div key={item}>
                        <Card />
                    </div>
            );
            });
        }


        }

    render(){
        return(
            <div className='cards-container'>
            {this.renderCards()}
            </div>
        );
    }
}

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
    homePageState: state
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardsContainer)



































