import React from 'react'
import './home.less'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '中间部分'
        }
    }
    render() {
        return (
                <div className="container-body">
                    <div className="body-inner">
                        <p>111111</p>
                    </div>
                </div>
        )
    }
}
