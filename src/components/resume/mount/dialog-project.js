/*
* @Author: AskMeWhy
* @Date:   2019-06-25 19:20:25
* @Last Modified by:   AskMeWhy
* @Last Modified time: 2020-01-20 00:05:16
*/

import Vue from 'vue';
import ComponentTemplate from './dialog-project.vue';
const VueComponent = Vue.extend(ComponentTemplate);

export const dialogProject = (option) => {
    let vm = new VueComponent().$mount();
    vm.$on('onopen', () => {
        if (option && option.open) option.open(vm);
    });
    vm.$on('onclose', () => {
        if (option && option.close) option.close(vm);
    });
    vm.$on('onafterClose', () => {
        if (option && option.afterClose) option.afterClose(vm);
    });
    vm.show = true;
    return vm;
};
