import React, {Component} from 'react';
import {Card, Select, Form, Button, Table, Pagination, Modal, Radio} from 'antd'
import '@/page/city/index.less'
import axios from '@/axios/index.js'
const columns = [
    {
        title: '订单编号',
        dataIndex: 'order_sn'
    },
    {
        title: '车辆编号',
        dataIndex: 'bike_sn'
    },
    {
        title: '用户名',
        dataIndex: 'user_name'
    },
    {
        title: '手机号码',
        dataIndex: 'mobile'
    },{
        title: '里程',
        dataIndex: 'distance'
    },
    {
        title: '行程时长',
        dataIndex: 'total_time'
    },
    {
        title: '状态',
        dataIndex: 'status'
    },
    {
        title: '开始时间',
        dataIndex: 'start_time'
    },
    {
        title: '结束时间',
        dataIndex: 'end_time'
    },
    {
        title: '订单金额',
        dataIndex: 'total_fee'

    },
    {
        title: '实付金额',
        dataIndex: 'user_pay'
    }

];
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value: 1,
            model: 1,
            dataSource: [],
            page: 1,
            count: 10
        };
    }
    componentDidMount() {
        this.getOrderList()
    }
    getOrderList = ()=>{
       axios.ajax({
           url: '/order/list',
           data: {
               params: {
                   page: 1
               }
           }
       }).then((res)=>{
           var list = res.result.item_list
           list = list.map((item, index)=>{
                item.key = index;
                return item
           })
           this.setState({
               dataSource: list,
               page: res.result.page,
               count: res.result.total_count
           })
       })
    }
    getNewList =(e)=>{
        this.setState({
            page: e
        },()=>{
            this.getOrderList()
        })
    }
    onChange = e => {
        this.setState({
            value: e.target.value
        });
    };
    onModelChange = e => {
        this.setState({
            model: e.target.value
        });
    };
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const {Option} = Select;
        return (
            <div>
                <Card>
                    <Form layout={"inline"}>
                        <Form.Item label="城市:">
                            <Select defaultValue="1" style={{width: 120}} onChange={this.handleChange}>
                                <Option value="0">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item  label="用车模式:">
                            <Select  defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="0">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item  label="运行模式:">
                            <Select  defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="0">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item  label="加盟商授权状态:">
                            <Select  defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="0">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <Button type={"primary"}>查询</Button>
                            <Button type={"reset"}>重置</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card>
                    <div style={{marginBottom:"20px"}}>
                        <Button type="primary" onClick={this.showModal}>
                            订单详情
                        </Button>
                        <Button type="primary" onClick={this.showModal}>
                            结束订单
                        </Button>
                        <Modal
                            title="开通城市"
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onOk={this.handleOk}
                        >
                            <div style={{padding: '0 40px'}}>
                                <Form layout={"inline"}>
                                    <Form.Item label="选择城市:">
                                        <Select defaultValue="1" style={{width: 120}} onChange={this.handleChange}>
                                            <Option value="0">全部</Option>
                                            <Option value="1">北京市</Option>
                                            <Option value="2">天津市</Option>
                                        </Select>
                                    </Form.Item> <br/>
                                    <Form.Item label="营运模式:">
                                        <Radio.Group  value={this.state.value} onChange={this.onChange}>
                                            <Radio value={1}>自盟</Radio>
                                            <Radio value={2}>加盟</Radio>
                                        </Radio.Group>
                                    </Form.Item> <br/>
                                    <Form.Item label="用车模式:">
                                        <Radio.Group  value={this.state.model} onChange={this.onModelChange}>
                                            <Radio value={1}>指定停车点模式</Radio>
                                            <Radio value={2}>禁停区模式</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Modal>
                    </div>
                    <Table rowSelection={{type:"radio"}} pagination={false} bordered={true} dataSource={this.state.dataSource} columns={columns} />
                    <Pagination current={this.state.page} total={this.state.count} style={{float:"right"}} onChange={this.getNewList}/>
                </Card>
            </div>
        );
    }
}

export default Order;
