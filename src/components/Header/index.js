import React from 'react'
class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            msg : '11111'
        }
    }
    render() {
        return(
            <div>
                header
            </div> 
        )
    }
}
export default Header