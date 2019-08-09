import React from 'react'
import {Row, Col, Menu} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './public/css/admin.less'
class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
                <div>
                    <Row className="container">
                        <Col span={4} className="nav-left">
                            <NavLeft/>
                        </Col>
                        <Col span={20} className="main">
                            <Header/>
                            <Row className="right-middle">
                                {/*将子节点在此处显示*/}
                                {this.props.children}
                            </Row>
                            <Footer/>
                        </Col>
                    </Row>
                </div>
        )
    }
}

export default Admin
