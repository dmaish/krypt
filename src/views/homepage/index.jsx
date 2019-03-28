import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar } from './../../components/NavBar';
import { ContentArea } from './../../components/contentArea';
// import { retractSlider } from './../../redux/actionCreator/homePageActions';

export class Homepage extends Component{
    componentDidMount(){
        console.log('+'.repeat(10), this.props);
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