import React, {Component} from 'react';
import {Card,Form, Icon, Input, Button, Checkbox} from 'antd';
import '@/page/form/index.less'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Card title={'登录表单'}>
                    <Form layout="inline">
                        <Form.Item >
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item >
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title={'登录注册表单'}>
                    <Form className="login-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>记住我</Checkbox>
                            <a className="login-form-forgot" href="www.baidu.com">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Login;
