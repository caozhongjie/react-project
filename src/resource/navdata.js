const menuList = [
    {
        title:'首页',
        key:'/home',
        component: () => import('../page/Home/home.js')
    },
    {
        title:'UI',
        key:'/ui',
        children:[
            {
                title:'按钮',
                key:'/ui/buttons',
                component: () => import('../page/UI/Button.js')
            },
            {
                title:'弹框',
                key:'/ui/modals',
                component: () => import('../page/UI/modals.js')
            },
            {
                title:'Loading',
                key:'/ui/loadings',
                component: () => import('../page/UI/loadings.js')
            },
            {
                title:'通知提醒',
                key:'/ui/notification',
                component: () => import('../page/UI/notification.js')
            },
            {
                title:'全局Message',
                key:'/ui/messages',
                component: () => import('../page/UI/messages.js')
            },
            {
                title:'Tab页签',
                key:'/ui/tabs',
                component: () => import('../page/UI/tabs.js')
            },
            {
                title:'图片画廊',
                key:'/ui/gallery',
                component: () => import('../page/UI/gallery.js')
            },
            {
                title:'轮播图',
                key:'/ui/carousel',
                component: () => import('../page/UI/carousel.js')
            }
        ]
    },
    {
        title:'表单',
        key:'/form',
        children:[
            {
                title:'登录',
                key:'/form/login',
                component: () => import('../page/form/login.js')
            },
            {
                title:'注册',
                key:'/form/reg',
                component: () => import('../page/form/carousel.js')
            }
        ]
    },
    {
        title:'表格',
        key:'/table',
        children:[
            {
                title:'基础表格',
                key:'/table/basic',
            },
            {
                title:'高级表格',
                key:'/table/high',
            }
        ]
    },
    {
        title:'富文本',
        key:'/rich'
    },
    {
        title:'城市管理',
        key:'/city'
    },
    {
        title:'订单管理',
        key:'/order',
        btnList:[
            {
                title:'订单详情',
                key:'detail'
            },
            {
                title:'结束订单',
                key:'finish'
            }
        ]
    },
    {
        title:'员工管理',
        key:'/user'
    },
    {
        title:'车辆地图',
        key:'/bikeMap'
    },
    {
        title:'图标',
        key:'/charts',
        children:[
            {
                title:'柱形图',
                key:'/charts/bar'
            },
            {
                title:'饼图',
                key:'/charts/pie'
            },
            {
                title:'折线图',
                key:'/charts/line'
            },
        ]
    },
    {
        title:'权限设置',
        key:'/permission'
    },
];
export default menuList;
