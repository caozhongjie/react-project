import React, {Component} from 'react';
import { Form, Input } from 'antd';
class Reg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formLayout: 'horizontal'
        };
    }
    handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
    };
    render() {
        const { formLayout } = this.state;
        const formItemLayout =
            formLayout === 'horizontal'
                ? {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 14 },
                }
                : null;
        return (
            <div className={'body-inner'}>
                <Form layout={formLayout}>
                    <Form.Item label="账号" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="密码" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="邮箱" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="昵称" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="性别" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Reg;
