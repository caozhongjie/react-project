import React from 'react'
import './index.less'
class Footer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            msg : '11111'
        }
    }
    render() {
        return(
            <div className="footer">
                这个是项目的底部
            </div> 
        )
    }
}
export default Footer