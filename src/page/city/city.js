import React, {Component} from 'react';
import {Card, Select, Form, Button, Table, Divider, Tag,Pagination, Modal, Radio} from 'antd'
import '@/page/city/index.less'
import axios from './../../axios/index';
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    }






];
const columns = [
    {
        title: '城市Id',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '城市名称',
        dataIndex: 'name',
        key: 'age',
    },
    {
        title: '用车模式',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '营运模式',
        dataIndex: 'address',
        key: 'address1',
    },{
        title: '授权加盟商',
        dataIndex: 'address',
        key: 'address2',
    },
    {
        title: '城市管理员',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '城市开通时间',
        dataIndex: 'address',
        key: 'address3',
    },
    {
        title: '操作时间',
        dataIndex: 'address',
        key: 'address4',
    },
    {
        title: '操作人',
        dataIndex: 'address',
        key: 'address5',
    }

];
class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value: 1,
            model: 1
        };
    }
    componentDidMount(){
        this.requestList();
    }
    requestList = ()=>{
        let _this = this;
        axios.ajax({
            url: '/open_city',
            data:{
                params:{
                    page:1
                }
            }
        }).then((res)=>{
            console.log(6666)
            console.log(res)
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });

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
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
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
                            开通城市
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
                    <Table pagination={false} bordered={true} dataSource={dataSource} columns={columns} />
                    <Pagination defaultCurrent={1} total={50} style={{float:"right"}} />
                </Card>
            </div>
        );
    }
}

export default City;
