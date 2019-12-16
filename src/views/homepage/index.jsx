import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar } from './../../components/NavBar';

import { SideBarAndContentAreaContainer } from './../../components/contentArea';
import { 
    retractSlider,
    fetchAllCurrenciesAction,
        } from './../../redux/actionCreator/homePageActions';

export class Homepage extends Component{
    componentDidMount(){
        const {  fetchAllCurrenciesAction } = this.props;
        fetchAllCurrenciesAction();

        console.log('homepage props', this.props);
    }

    renderNavBar(){
        return (
        <Navbar actionDispatch={this.props.retractSlider} /> 
        ); 
    }

    renderLeftSideBar(){
        return <SideBarAndContentAreaContainer />
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

const mapDispatchToProps = {
    retractSlider,
    fetchAllCurrenciesAction,
}

const mapStateToProps = (state) => ({
    allState: state
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage)