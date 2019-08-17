import { type } from '../action';
const initialState = {
    menuName: '首页'
}

export default (state = initialState,action)=>{
    console.log('action',action) // 获取到action之后根据type的不同来更改不同的值    类似于action:{type: "SWITCH_MEUN", menuName: "订单管理"}
    switch (action.type) {
        case type.SWITCH_MEUN:
            return {
                ...state, // 保存上一个状态值的写法
                menuName:action.menuName
            }
            break;
        default:
            return {...state}
            break

    }
}