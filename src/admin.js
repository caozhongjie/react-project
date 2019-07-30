import React from 'react'
import {Row, Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './public/css/admin.less'
import Home from './page/Home/home'
class Admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            msg: 'admin'
        }
    }
    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={20} className="main">
                        <Header />
                        <Row>
                            <Home></Home>
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>  
        )
    }
}
export default Admin