import React, {Component} from 'react';
import {Carousel, Card} from 'antd';
import '@/page/UI/index.less'

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="body-inner">
                <Card title={'文字背景轮播'}>
                    <Carousel>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default CarouselComponent;
