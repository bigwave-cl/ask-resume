/*
 * @Author: askMeWhy
 * @Date:   2017-12-29 14:44:52
 * @Last Modified by:   AskMeWhy
 * @Last Modified time: 2020-01-14 15:06:34
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
import Api from '@/services';
export const ajaxActions = {
    ajaxRequestStart({ commit }) {
        commit(AJAX_REQUEST);
    },
    ajaxRequestEnd({ commit }) {
        setTimeout(() => {
            commit(AJAX_REQUEST_COMPLETE);
        }, 300);
    }
};

export const userInfoActions = {
    login({ commit }, payload) {
        let { user, pass } = payload;
        commit(USER_LOGIN);
        return new Promise(async(resolve, reject) => {
            try {
                // const auth = await Api.server['login']({
                //     data: {
                //         username: user,
                //         password: pass
                //     }
                // });
                // console.log(auth);
                let auth = {
                    data: {
                        token: +new Date(),
                        refreshToken: +new Date()
                    },
                    headers: {
                        'x-auth-token': +new Date()
                    }
                };
                commit(USER_GETINFO_SUCCESS, {
                    user,
                    pass
                });
                commit(USER_LOGIN_SUCCESS, {
                    token: auth.headers['x-auth-token'] || '',
                    refreshToken: auth.headers['x-auth-token'] || ''
                });
                resolve(auth.data);
            } catch (e) {
                reject(e);
            }
        });
    },
    getInfo({ commit }) {
        commit(USER_GETINFO);
        return new Promise(async(resolve, reject) => {
            try {
                const response = await Api.server['account/me']();
                commit(USER_GETINFO_SUCCESS, response.data.data);
                resolve(response.data.data);
            } catch (e) {
                commit(USER_LOGOUT_SUCCESS);
                reject(new Error('获取账户信息失败！'));
            }
        });
    },
    refreshToken({ state, commit }) {
        commit(USER_REFRESH_TOKEN);
        return new Promise(async(resolve, reject) => {
            try {
                const { data: auth } = await Api.server['refreshToken']({
                    // data: f
                    data: {
                        refresh_token: state.user.auth.refreshToken
                    }
                });
                commit(USER_REFRESH_TOKEN_SUCCESS, auth.data);
                resolve(auth.data);
            } catch (e) {
                reject(e);
            }
        });
    },
    logout({ commit }) {
        commit(USER_LOGOUT);
        return new Promise((resolve, reject) => {
            commit(USER_LOGOUT_SUCCESS);
            resolve();
        });
    }
};
