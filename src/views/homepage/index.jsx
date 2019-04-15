import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar } from './../../components/NavBar';
import { SideBarContentAreaContainer } from './../../components/contentArea';
import { 
    retractSlider,
    fetchAllCurrenciesAction,
        } from './../../redux/actionCreator/homePageActions';

export class Homepage extends Component{
    componentDidMount(){
        const {  fetchAllCurrenciesAction } = this.props;
        fetchAllCurrenciesAction();
    }

    renderNavBar(){
        return (<Navbar actionDispatch={this.props.retractSlider} /> ); 
    }

    renderLeftSideBar(){
        return <SideBarContentAreaContainer />
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

const mapDispatch = {
    retractSlider,
    fetchAllCurrenciesAction,
}

const mapStateToProps = (state) => ({
    slider: state[0]
})

export default connect(
    mapStateToProps,
    mapDispatch,
)(Homepage)