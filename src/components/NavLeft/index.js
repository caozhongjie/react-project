import React from 'react'
import { Menu, Icon } from 'antd';
import MeunList from '../../resource/navdata'
import './index.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { SubMenu } = Menu;
class NavLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuNode: ''
        }
    }
    componentWillMount() {
        const nodeTree = this.renderMenu(MeunList)
        console.log(33333333)
        console.log(nodeTree)
        this.setState({
            MenuNode: nodeTree
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                       {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}> <Link to={item.key}>{item.title}</Link></Menu.Item>
            )
        })
    }

    handleClick(e) {
        console.log('click', e);
    }
    render() {
        return (
            <Router>
                <div className="left-bar">
                    <div className="logo">Logo</div>
                    <div className="nav"></div>
                    <Menu theme='dark' onClick={this.handleClick.bind(this)} style={{ width: 256 }} mode="vertical">
                        {this.state.MenuNode}
                    </Menu>
                </div>
            </Router>
        )
    }
}
export default NavLeft
