/*
* @Author: AskMeWhy
* @Date:   2019-09-10 17:55:01
* @Last Modified by:   AskMeWhy
* @Last Modified time: 2019-09-10 18:02:48
*/
import { required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', {
  ...required,
  message: '该字段为必填项！'
});
