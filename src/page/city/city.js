import React, {Component} from 'react';
import {Card, Select, Form, Button, Table, Pagination, Modal, Radio} from 'antd'
import '@/page/city/index.less'
import axios from '@/axios/index';
import Unitls from '../../unit/index'
class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value: 1,
            model: 1,
            dataSource: [],
            page:1,
            total_count: 20
        };
    }
    componentDidMount(){
        this.requestList();
    }
    getNewList=(e)=>{
        this.setState({
            page: e
        },function () {
            this.requestList()
        })
    }
    requestList = ()=>{
        let _this = this;
        axios.ajax({
            url: '/open_city',
            data:{
                params:{
                    page:this.state.page
                }
            }
        }).then((res)=>{
            if(res.code === '0') {
                var list = res.result.item_list.map((item, index) => {
                    item.key = index;
                    return item;
                });
                _this.setState({
                    dataSource: list,
                    page: res.result.page,
                    total_count: res.result.total_count
                })
            } else {
                console.log(res)
            }
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
        const columns=  [
            {
                title: '城市Id',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'name'
            },
            {
                title: '用车模式',
                dataIndex: 'mode',
                render(mode) {
                    return mode ===1?'停车点':'禁停区'
                }
            },
            {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(op_mode){
                    return op_mode === 1?'自营':'加盟'
                }
            },{
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(',');
                }
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time'
            },
            {
                title: '操作时间',
                dataIndex: 'update_time',
                render(update_time){
                    return Unitls.formatetime(update_time)
                }
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }

        ]
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
                    <Table
                        style={{overflowY:"auto"}}
                        pagination={false}
                        bordered={true}
                        dataSource={this.state.dataSource}
                        columns={columns} />
                    <Pagination
                        hideOnSinglePage={true}
                        onChange={this.getNewList}
                        current={this.state.page}
                        total={this.state.total_count}
                        style={{float:"right"}} />
                </Card>
            </div>
        );
    }
}

export default City;
