import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar } from './../../components/NavBar';
import { ContentArea } from './../../components/contentArea';
import allCurrenciesService from './../../services/allCurrenciesService';
// import { retractSlider } from './../../redux/actionCreator/homePageActions';

export class Homepage extends Component{
    componentDidMount(){
        const currencyData = allCurrenciesService.getAllcurrencies();
        console.log('+'.repeat(10), currencyData);
    }

    renderNavBar(){
        return (<Navbar actionDispatch={this.props.dispatch} /> );
    }

    renderLeftSideBar(){
        return <ContentArea />
    }

render(){
    return(
    <div>
        <Fragment>
            {this.renderNavBar()}
            {this.renderLeftSideBar()}
        </Fragment>
    </div>
    )
}
}

// const mapDispatchToProps = {
//     retractSlider
// }

const mapStateToProps = (state) => ({
    slider: state[0]
})


export default connect(
    mapStateToProps,
    null
)(Homepage)