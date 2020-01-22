/*
 * @Author: askMeWhy
 * @Date:   2017-12-29 14:44:52
 * @Last Modified by:   AskMeWhy
 * @Last Modified time: 2019-09-03 17:15:57
 */
import {
    AJAX_REQUEST,
    AJAX_REQUEST_COMPLETE,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
    USER_GETINFO,
    USER_GETINFO_SUCCESS,
    USER_REFRESH_TOKEN,
    USER_REFRESH_TOKEN_SUCCESS
} from './mutations-types';

import { sessionStorage } from '@/utils';

export const ajaxMutations = {
    [AJAX_REQUEST](state) {
        if (state.ajaxLoaderIndex === 0) state.ajaxLoader = true;
        state.ajaxLoaderIndex++;
    },
    [AJAX_REQUEST_COMPLETE](state, payload) {
        state.ajaxLoaderIndex--;
        if (state.ajaxLoaderIndex === 0) state.ajaxLoader = false;
    }
};

export const userInfoMutations = {
    [USER_LOGIN](state) {},
    [USER_LOGIN_SUCCESS](state, payload) {
        state.user.auth = payload;
        if (payload) {
            state.user.isSignIn = true;
        }
        sessionStorage.setItem('auth', state.user.auth);
    },
    [USER_GETINFO](state) {},
    [USER_GETINFO_SUCCESS](state, payload) {
        state.user.userInfo = payload;
        sessionStorage.setItem('userInfo', state.user.userInfo);
    },
    [USER_REFRESH_TOKEN](state) {},
    [USER_REFRESH_TOKEN_SUCCESS](state, payload) {
        state.user.auth = payload;
        sessionStorage.setItem('auth', payload);
    },
    [USER_LOGOUT](state) {},
    [USER_LOGOUT_SUCCESS](state, payload) {
        let userInfo = sessionStorage.getItem('userInfo');
        userInfo && sessionStorage.removeItem('userInfo');
        let auth = sessionStorage.getItem('auth');
        auth && sessionStorage.removeItem('auth');
        state.user.isSignIn = false;
    }
};
