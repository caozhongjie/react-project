import React, {Component} from 'react';
import { Spin,Card,Icon,Alert } from 'antd';
import '@/page/UI/index.less'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Loadings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Card title='spin用法'>
                    <div className="spin-box">
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                        <Spin indicator={antIcon} />
                        <Spin indicator={antIcon} />
                    </div>
                </Card>
                <Card title='内容遮罩'>
                    <div>
                        <Spin tip="Loading...">
                            <Alert
                                message="React"
                                description="欢迎来到react"
                                type="info"
                            />
                        </Spin>
                        <Spin spinning={false}>
                            <Alert
                                message="Alert message title"
                                description="Further details about the context of this alert."
                                type="info"
                            />
                        </Spin>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Loadings;
