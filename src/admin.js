import React from 'react'
import {Row, Col, Menu} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './public/css/admin.less'
import Home from './page/Home/home'
import menuList from './resource/navdata'
import {HashRouter , Route, Link,Switch } from "react-router-dom";
import Button from './page/UI/Button'
class Admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            RouterList: []
        }
    }
    componentWillMount() {
        const nodeTreeRoute = this.renderMenu(menuList)
        console.log(11111111111)
        console.log(nodeTreeRoute)
        console.log(menuList)
        this.setState({
            RouterList: nodeTreeRoute
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.component) {
            return (
                <Route path={item.key} key={item.key} component={item.component} />)
            } else {
                return ''
            }
        })
    }
    render() {
        return (
            <HashRouter>
            <div>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={20} className="main">
                        <Header />
                        <Row className="right-middle">
                            <Route path="/home" exact component={Home} />
                            <Route path="/" exact component={Button} />
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
            </HashRouter>
        )
    }
}
export default Admin
