import React from 'react'
import { Menu, Icon } from 'antd';
import MeunList from '../../resource/navdata'
import './index.less'
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
        this.setState({
            MenuNode: nodeTree
        })
    }
    renderMenu = (data) => {
      return  data.map((item) => {
            if (item.children) {
                return (   
                    <SubMenu key={item.key}  title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>{item.title}</Menu.Item>
            )
        })
    }
    handleClick(e) {
        console.log('click', e);
    }
    render() {
        return (
            <div>
                <div className="logo">Logo</div>
                <div className="nav"></div>
                <Menu theme='dark' onClick={this.handleClick.bind(this)} style={{ width: 256, height: '100vh' }} mode="vertical">
                    {this.state.MenuNode}
                </Menu>
            </div>
        )
    }
}
export default NavLeft