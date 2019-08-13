import React, {Component} from 'react';
import '@/page/UI/index.less'
import { Card, Button, Icon } from 'antd';
class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            iconLoading: false,
        };
    }
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };
    render() {
        return (
            <div >
                <Card title='基础按钮'>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>disabeld</Button>
                </Card>
                <Card title='图标按钮'>
                    <Button type="primary" icon="search">Search</Button>
                    <Button type="primary" icon="plus">增加</Button>
                    <Button type="primary" icon="edit">编辑</Button>
                    <Button type="primary" icon="delete">删除</Button>
                    <Button type="circle"  icon="search"></Button>
                    <Button type="download" icon="download">下载</Button>

                </Card>
                <Card title='Loading按钮'>
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" size="small" loading>Loading</Button>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me!</Button>
                    <Button type="circle" loading></Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group size='large'>
                        <Button type="primary">
                            <Icon type="left" />
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title='按钮大小'>
                    <Button type="primary" size='small'>Primary</Button>
                    <Button type="primary" size='large'>Primary</Button>
                </Card>

            </div>
        );
    }
}

export default ButtonComponent;
