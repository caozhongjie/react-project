import React from 'react'
import {Row, Col} from 'antd'
import '@/components/Header/index.less'
import Unit from '../../unit/index'
import Axios from '../../axios/index'
import { connect } from "react-redux";

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            systime : '',
            weather: '晴转多云',
            weather_pic: ''
        }
    }
    componentWillMount() {
        setInterval(()=>{
            let systime = Unit.formatetime(new Date().getTime())
            this.setState({
                systime: systime
            })
        },1000)
       Axios.jsonp({url:'http://api.map.baidu.com/telematics/v3/weather?location=chengdu&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'})
       .then((res)=>{
           this.setState({
               weather: res.results[0].weather_data[0].weather,
               weather_pic: res.results[0].weather_data[0].dayPictureUrl
           })
       }).catch((err)=>{
           console.log(err)
       })
        //  JsonP('http://api.map.baidu.com/telematics/v3/weather?location=chengdu&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',{},function(err,data){
        //     console.log(data)
        // })
    }
    render() {
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>cjz管理后台</span>
                        <span href="#">退出</span>
                    </Col>
                </Row>
                <Row className="header-bottom">
                    <Col span={4} className="header-bottom-left">
                        <span>{this.props.menuName} </span>
                    </Col>
                    <Col span={20} className="header-bottom-right">
                        <span className="detail-time">{this.state.systime}</span>
                        <img className="weather-pic" src={this.state.weather_pic} alt=""/>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => { //每个共享数据的组件都要通过mapStateToProps方法将state映射成自己可接收的props对象,之后通过this.props.menuName直接使用state中的值
    return {
        menuName: state.menuName
    }
};
export default connect(mapStateToProps)(Header); //第一个时接受回调方法
