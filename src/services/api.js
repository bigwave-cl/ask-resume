/*
 * @Author: askMeWhy
 * @Date:   2018-07-05 09:57:53
 * @Last Modified by:   AskMeWhy
 * @Last Modified time: 2019-09-21 11:47:43
 */
/*
调用方式 [namespace/name]
有namespace=>[namespace/name]
无namespace=>[name]

{
    name: '', //函数名
    namespace: '', //命名空间
    setCommonParam: true, //设置公共参数 true：需要 false：不需要|默认值
    method:'GET', //请求方式
    params:{}, //本接口在未设置的时候请求带上的默认值
    path:'', //接口api地址
    desc:'' //接口描述信息
}
 */


const API_CONFIG = [{
        name: 'login',
        namespace: '',
        method: 'post',
        params: {},
        path: '/api/admin/sign_in',
        desc: '登录'
}, {
        name: 'userList',
        setCommonParam: true,
        namespace: 'user',
        method: 'get',
        params: {},
        path: '/api/admin/user/users',
        desc: '用户列表'
}, {
        name: 'payList',
        namespace: 'user',
        setCommonParam: true,
        method: 'get',
        params: {},
        path: '/api/admin/user/pay_type',
        desc: '支付列表'
}, {
        name: 'examine',
        namespace: 'user',
        setCommonParam: true,
        method: 'get',
        params: {},
        path: '/api/admin/user/role_apply',
        desc: '商家审核'
}, {
        name: 'advList',
        namespace: '',
        setCommonParam: true,
        method: 'get',
        params: {},
        path: '/api/admin/advertise/advertises',
        desc: '广告管理'
}, {
        name: 'orderList',
        namespace: '',
        setCommonParam: true,
        method: 'get',
        params: {},
        path: '/api/admin/order/orders',
        desc: '订单管理'
}];
export default API_CONFIG;
