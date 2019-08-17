import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/index.css'
import Route from './route'
import { Provider } from 'react-redux'
import configureStore from './redux/store/index.js';
import * as serviceWorker from './public/js/serviceWorker';
const store = configureStore(); //保存数据源的地方
ReactDOM.render(
    // Provider是提供数据源的地方 Provider将所有要共享数据的组件共同的父组件包裹起来
    //     并作为含有context的高阶组件，同时将store传入，作为context共享的内容
    <Provider store={store}>
        <Route />
    </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
