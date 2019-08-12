import React, {Component} from 'react';
import menuList from '@/resource/navdata'
import Admin from '@/admin'
import {HashRouter , Route, Switch,Redirect } from "react-router-dom";
import Login from "@/page/login/Login";
import App from '@/App'
import NoMatch from '@/page/NoMatch.js'
class RoutePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RouterList: []
        };
    }
    componentWillMount() {
        const nodeTreeRoute = this.getDetailRoute(menuList)
        this.setState({
            RouterList: nodeTreeRoute
        })
    }
    getDetailRoute = (data) => {
        return data.map((item, index) => {
            if (item.children) {
                return this.getDetailRoute(item.children)
            }
            return (
                <Route key={index} path={item.key} exact={item.exact} component={item.component} />
            )
        })
    }
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {/*默认启动时重定向到home页面*/}
                    <Route path="/" exact render={()=>
                        <Redirect to="/admin"></Redirect>
                    }/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            {this.state.RouterList}
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login}/>
                    <Route  component={NoMatch}/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default RoutePage;
