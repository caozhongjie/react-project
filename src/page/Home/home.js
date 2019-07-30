import React from 'react'
import './home.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '中间部分'
        }
    }
    render() {
        return (
            <Router>
                <div className="container-body">
                    <div className="body-inner">
                        <p>111111</p>
                    </div>
                </div>
            </Router>
        )
    }
}