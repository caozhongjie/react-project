import Home from '@/page/Home/home.js'
import Button from '@/page/UI/Button.js'
import Modals from '@/page/UI/modals.js'
import Loadings from '@/page/UI/loadings.js'
import Notification from '@/page/UI/notification.js'
import Messages from '@/page/UI/messages.js'
import Tabs from '@/page/UI/tabs.js'
import Gallery from '@/page/UI/gallery.js'
import Carousel from '@/page/UI/carousel.js'
const menuList = [
    {
        title:'首页',
        key:'/admin',
        exact: true,
        component:  Home
    },
    {
        title:'UI',
        key:'/admin/ui',
        children:[
            {
                title:'按钮',
                key:'/admin/ui/buttons',
                component: Button
            },
            {
                title:'弹框',
                key:'/admin/ui/modals',
                component: Modals
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
                component: Loadings
            },
            {
                title:'通知提醒',
                key:'/admin/ui/notification',
                component: Notification
            },
            {
                title:'全局Message',
                key:'/admin/ui/messages',
                component: Messages
            },
            {
                title:'Tab页签',
                key:'/admin/ui/tabs',
                component: Tabs
            },
            {
                title:'图片画廊',
                key:'/admin/ui/gallery',
                component: Gallery
            },
            {
                title:'轮播图',
                key:'/admin/ui/carousel',
                component: Carousel
            }
        ]
    },
    {
        title:'表单',
        key:'/form',
        children:[
            {
                title:'登录',
                key:'/admin/form/login'
            },
            {
                title:'注册',
                key:'/admin/form/reg'
            }
        ]
    },
    {
        title:'表格',
        key:'/table',
        children:[
            {
                title:'基础表格',
                key:'/admin/table/basic',
            },
            {
                title:'高级表格',
                key:'/admin/table/high',
            }
        ]
    },
    {
        title:'富文本',
        key:'/admin/rich'
    },
    {
        title:'城市管理',
        key:'/admin/city'
    },
    {
        title:'订单管理',
        key:'/admin/order',
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
        key:'/admin/user'
    },
    {
        title:'车辆地图',
        key:'/admin/bikeMap'
    },
    {
        title:'图标',
        key:'/admin/charts',
        children:[
            {
                title:'柱形图',
                key:'/admin/charts/bar'
            },
            {
                title:'饼图',
                key:'/admin/charts/pie'
            },
            {
                title:'折线图',
                key:'/admin/charts/line'
            },
        ]
    },
    {
        title:'权限设置',
        key:'/admin/permission'
    },
];
export default menuList;
