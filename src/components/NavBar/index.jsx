/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';

export class Navbar extends Component {
state = {
    current: 'mail',
    }

    handleClick = (e) => {
    console.log('click ', e);
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
            <Icon type="menu" />menu
        </Menu.Item>
        </Menu>
    );
    }
}
