import React from 'react';
import { Menu} from 'antd';
import MeunList from '../../resource/navdata';
import { connect } from "react-redux";
import { switchMenu } from "../../redux/action";
import '@/components/NavLeft/index.less';
import { HashRouter, Link } from "react-router-dom";
const { SubMenu } = Menu;
class NavLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuNode: '',
            currentKey: ''
        }
    }
    componentWillMount() {
        const nodeTree = this.renderMenu(MeunList)
        var routeKey = window.location.hash.substr(1);
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

    handleClick = ({ item, key }) => {
        var title = item.props.children[1].props.children
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props; //使用connect后会生成dispatch
        dispatch(switchMenu(title));

    };
    render() {
        return (
            <HashRouter>
                <div className="left-bar">
                    <div className="logo">Logo</div>
                    <div className="nav"></div>
                    <Menu theme='dark' onClick={this.handleClick} style={{ width: 256 }} mode="vertical">
                        {this.state.MenuNode}
                    </Menu>

                </div>
            </HashRouter>
        )
    }
}
export default connect()(NavLeft);
