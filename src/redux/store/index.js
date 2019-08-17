// createStore是一个工厂方法，内里通过返回出去的方法作用于连保持了state(state就是共享数据)的生命
// 并返回了一个包括三个方法的对象，三个方法分别为getState，subscribe，dispatch
// getState即获取当前state也就是共享数据
// subscribe接收一个方法为参数，目的是注册这个方法为dispatch调用后的callback方法
// dispatch接收一个参数，这个参数是action = {动作类别, 动作参数}
// dispatch内部调用了Reducer并在Reducer执行完毕后执行subscribe注册的callback(一般用于更新组件渲染)
import { createStore } from "redux";
import reducer from './../reducer';
const configureStore=()=>createStore(reducer) //没有用大括号包着的代表返回的意思  Reducer传入craeteStore生成store
export default configureStore //没有用大括号包着的代表返回的意思