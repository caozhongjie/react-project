import React from 'react'
import {Row, Col, Menu} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './public/css/admin.less'
import Home from './page/Home/home'
import RouterList from './resource/navdata'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
class Admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            RouterList: []
        }
    }
    componentWillMount() {
        const nodeTreeRoute = this.renderMenu(RouterList)
        console.log(11111111111)
        console.log(nodeTreeRoute)
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
                return
            }
        })
    }
    render() {
        return (
            <Router>
            <div>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={20} className="main">
                        <Header />
                        <Row>
                            {this.state.RouterList}
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
            </Router>
        )
    }
}
export default Admin
