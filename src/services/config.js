/*
 * @Author: askMeWhy
 * @Date:   2018-07-05 09:57:40
 * @Last Modified by:   AskMeWhy
 * @Last Modified time: 2019-09-21 10:45:26
 */
export const API_DEFAULT_CONFIG = {
    BaseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.3.140:4009' : process.env.VUE_APP_SERVER_API,
    MockURL: ''
};
