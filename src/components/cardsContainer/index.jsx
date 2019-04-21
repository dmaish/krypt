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
            console.log('monero', displayCurrency);
            return Object.keys(displayCurrency).map( (item) => {
                console.log('that item', item);
                const {USD: { 
                    PRICE, 
                    TOTALVOLUME24HTO, 
                    MKTCAP, 
                    SUPPLY,
                    CHANGE24HOUR,
                    CHANGEPCT24HOUR,
                    IMAGEURL
                }}  = displayCurrency[item];
                console.log('that itemq', PRICE);
                return (
                    <div key={item}>
                        <Card 
                        title={item}
                        price={PRICE}
                        volume24hrs={TOTALVOLUME24HTO}
                        marketcap={MKTCAP}
                        supply={SUPPLY}
                        change24hrs={CHANGE24HOUR}
                        changepercent24hrs={CHANGEPCT24HOUR}
                        imageUrl={IMAGEURL}
                        />
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



































