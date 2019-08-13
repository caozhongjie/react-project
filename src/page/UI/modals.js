import React, {Component} from 'react';
import { Card, Button, Modal, message,  notification } from 'antd';
import '@/page/UI/index.less'
class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
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
    info = () => {
        message.info('This is a normal message');
    };
    openNotification = () => {
        notification.open({
            message: '提醒标题',
            description:
                '提醒',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    render() {
        return (
            <div>
                <Card title='弹框'>
                    <div>
                        <Button type="primary" onClick={this.showModal}>
                            模态框
                        </Button>
                        <Button type="primary" onClick={this.info}>
                            message
                        </Button>
                        <Button type="primary" onClick={this.openNotification}>
                            通知提醒框
                        </Button>
                        <Modal
                            title="基础模态框框"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            mask={false}
                            centered={true}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Modals;
