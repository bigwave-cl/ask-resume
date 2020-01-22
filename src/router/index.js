import Vue from 'vue';
import Router from 'vue-router';

/* 包含导航栏的布局入口 */
import ResumeLayout from '@/views/layout/resume';

/* 个人简历 */
import Resume from '@/views/resume';


const ErrorPage404 = () => import(/* webpackChunkName: "error-page-404" */ '@/views/error-page/404.vue');

export const AllRoutersMap = [{
        path: '/',
        component: ResumeLayout,
        children: [{
            path: '',
            name: 'Resume',
            component: Resume,
            meta: {
                title: '在线简历',
                icon: 'icon-merchant',
                requiresAuth: false,
                notMenu: true
            }
        }]
},
    {
        path: '/404',
        name: '404',
        component: ErrorPage404
    },
    {
        path: '*',
        redirect: '/404'
    }
];


Vue.use(Router);
const beforeEach = (toRoute, fromRoute, next) => {
    if (toRoute.meta.title) {
        document.title = toRoute.meta.title + '·ASK';
    }
    next();
};
const afterEach = (toRoute, fromRoute) => {};


const router = new Router({
    routes: AllRoutersMap

});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
