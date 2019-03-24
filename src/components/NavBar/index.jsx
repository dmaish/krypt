/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { retractSlider } from './../../redux/actionCreator/homePageActions';

export class Navbar extends Component {
state = {
    current: 'mail',
    }

    handleClick = (e) => {
        const dispatch = this.props.actionDispatch;
        dispatch(retractSlider());
        this.setState({
            current: e.key,
        });
    }

    render() {
    return (
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        >
        <Menu.Item key="mail">
            <Icon type="menu" /> krypt
        </Menu.Item>
        </Menu>
    );
    }
}
