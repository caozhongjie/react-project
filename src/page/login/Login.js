import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    linkNewPage = ()=>{
        this.props.history.push("/admin/home")

    }
    render() {
        return (
            <div>
                <div style={{width:'500px','margin': '0 auto'}}>
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
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.linkNewPage}> Log in </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
