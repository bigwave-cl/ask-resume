<style lang="scss" scoped>
.info-panel {
    opacity: 0;
    transform: translate(-.1rem, 0);
    transition: opacity .3s linear, transform .3s linear;
    padding: 5% 0;

    &.active {
        opacity: 1;
        transform: translate(0, 0);
    }
        .title{
        padding: .3rem 0 .5rem;
        text-align: center;
        font-size: .3rem;
        color: $primary--color-3;
        font-weight: blod;
        

    }
    .detail{
        width: 80%;
        margin: 0 auto;
        .d-list{
            width: 100%;
            .d-item{
                width: 100%;
                .i__header{
                    padding: .14rem 0;
                    .i__title{
                        font-size: .26rem;
                        font-weight: bold;
                        color: $primary--color-1;
                    }
                    .i__text{
                        font-size: .2rem;
                        color: rgba($primary--color-1,.5);
                        padding: .1rem 0;
                        &.small{
                            padding: 0;
                            font-size: .16rem;
                            color: rgba($primary--color-1,.3);
                        }
                    }
                }
                .i__body{
                    padding: .2rem;
                    .i_btext{
                        font-size: .18rem;
                        color: rgba($primary--color-1,.5);
                        line-height: 1.8;
                    }
                }
            }
        }
    }
}

@media only screen and ($mobile-tag: $mobile-size) {
    .info-panel{
        padding: 0;
        height: 100%;
        width: 100%;
        .title{
            padding: .2rem 0 .3rem;
            text-align: center;
            font-size: .26rem;
        }
        .detail{
            height: calc(100% - .84rem);
            width: 100%;
            padding: 0 10% 10%;
            overflow: auto;
            display: block;
            .d-list{
                width: 100%;
                .d-item{
                    width: 100%;
                   .i__header{
                       .i__title{
                           font-size: .22rem;
                       }
                       .i__text{
                           font-size: .18rem;
                           &.small{
                               padding: 0;
                               font-size: .14rem;
                           }
                       }
                   }
                   .i__body{
                       padding: .16rem;
                       .i_btext{
                           font-size: .16rem;
                       }
                   }
                }
            }
        }
    }
}
</style>
<style lang="scss">
    /* 进入过渡的状态 */
    .ask-dialog-slide-work-enter-active {
        animation: ask-dialog-slide-work-animation-enter .5s linear 1 both;
    }

    @keyframes ask-dialog-slide-work-animation-enter {
        0% {
            transform: translate(-.2rem, 0);
        }

        100% {
            transform: translate(0, 0);
            opacity: 1;
        }
    }

    /* 离开过渡的状态 */
    .ask-dialog-slide-work-leave-active {
        animation: ask-dialog-slide-work-animation-leave .5s linear 1 both;
    }

    @keyframes ask-dialog-slide-work-animation-leave {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }

        100% {
            transform: translate(-.2rem, 0);
            opacity: 0;
        }
    }
</style>
<template>
    <AskDialog
        :show.sync="show"
        :afterClose="_afterClose"
        :beforeClose="_beforeClose"
        @open="_dialogOpen"
        :transition="'ask-dialog-slide-work'">
        <div class="info-panel" :class="{'active': textShow }">
            <div class="title">工作经历</div>
            <div class="detail">
                <ul class="d-list">
                    <li class="d-item">
                        <div class="i__header">
                            <div class="i__title">汇仁云嘉</div>
                            <div class="i__text">高级web前端开发工程师</div>
                            <div class="i__text small">2018年12月-至今</div>
                        </div>
                        <div class="i__body">
                            <div class="i_btext">公司简介：</div>
                            <div class="i_btext">公司目前阶段在依附区块链做DApp相关的东西，同时也在做OTC和线上云算力</div>
                            <div class="i_btext">工作描述：</div>
                            <div class="i_btext">主导开发公司otc系统化并独立设计公共模块</div>
                            <div class="i_btext">组织重构前端与设备的对接接口系统，供4个项目同时使用，降低70%的维护时间和提高调用灵活度</div>
                            <div class="i_btext">设计云算力系统架构并独立完成第一版的功能开发</div>
                            <div class="i_btext">指导实习生完成基础知识的积累和带领其参与部分日常功能开发</div>
                        </div>
                    </li>
                    <li class="d-item">
                        <div class="i__header">
                            <div class="i__title">四川驿停车智慧有限公司</div>
                            <div class="i__text">中级web前端开发工程师</div>
                            <div class="i__text small">2018年06月-2018年11月</div>
                        </div>
                        <div class="i__body">
                            <div class="i_btext">公司简介：</div>
                            <div class="i_btext">公司以开发和部署智慧城市小区停车场系统为基础收集相关大数据，目前是在etc无感支付的功能完善和北京路演之后的改版阶段</div>
                            <div class="i_btext">工作描述：</div>
                            <div class="i_btext">利用d3.js和websock完成对停车场硬件设备的web端监控项目</div>
                            <div class="i_btext">在云平台管理系统的开发中完成项目搭建、设计公共模块、功能开发、维护仓库</div>
                            <div class="i_btext">通过每周的需求评审完成下周的工作安排</div>
                            <div class="i_btext">在客服管理系统中负责问题处理模块、权限角色模块、部门模块等的设计和开发，问题处理模块利用组件化思路降低至少80%的维护成本和理解难度，利用递归提升树状组件的显示层级</div>
                        </div>
                    </li>
                    <li class="d-item">
                        <div class="i__header">
                            <div class="i__title">成都播菜互动有限公司</div>
                            <div class="i__text">中级web前端开发工程师</div>
                            <div class="i__text small">2017年04月-2018年05月</div>
                        </div>
                        <div class="i__body">
                            <div class="i_btext">公司简介：</div>
                            <div class="i_btext">成都研发中心主要负责的是pos机端的功能开发和微信端一个包含聊天、商城、多平台支付的项目</div>
                            <div class="i_btext">工作描述：</div>
                            <div class="i_btext">独立使用vue全家桶完成微信端商城的开发与后期维护</div>
                            <div class="i_btext">开发基于微信jssdk的语音聊天模块</div>
                            <div class="i_btext">结合canvas和css3完成商户活动动画、抽奖等定制化效果，获得各分区研发中心的肯定</div>
                            <div class="i_btext">在公司开发的app壳子中完成一个购物、报表、支付、订单管理的商城系统</div>
                            <div class="i_btext">基于高德地图开发坐标上传绘制路线、商品物流管理、锁定、路线回放、区域绘制等功能为一体的后台管理系统</div>
                            <div class="i_btext">安排新同事的日常开发任务和解决平时出现的问题</div>
                        </div>
                    </li>
                    <li class="d-item">
                        <div class="i__header">
                            <div class="i__title">成都快健康商务有限公司</div>
                            <div class="i__text">初级web前端开发工程师</div>
                            <div class="i__text small">2015年11月-2017年04月</div>
                        </div>
                        <div class="i__body">
                            <div class="i_btext">公司简介：</div>
                            <div class="i_btext">公司是菊乐集团的子公司，开发的是基于奶制品和平台的电商项目</div>
                            <div class="i_btext">工作描述：</div>
                            <div class="i_btext">负责Angular+ionic搭建的微信前端项目</div>
                            <div class="i_btext">基于微信端的活动项目开发</div>
                            <div class="i_btext">基于cakePHP的后台项目前端开发</div>
                            <div class="i_btext">负责官网开发和维护、以及菊乐官网</div>
                            <div class="i_btext">对node.js的项目也在维护</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </AskDialog>
</template>
<script>
import AskDialog from '../src/ask-dialog.vue';
export default {
    name: 'DialogWork',
    components: {
        AskDialog
    },
    data() {
        return {
            show: false,
            ajaxLoader: false,
            ajaxIndex: 0,
            textShow: false
        };
    },
    methods: {
        _open() {
            this.$emit('onopen');
        },
        _close() {
            this.$emit('onclose');
        },
        _afterClose() {
            this.$emit('onafterClose');
        },
        _beforeClose(close) {
            this.textShow = false;
            setTimeout(() => {
                close();
            }, 300);
        },
        _dialogOpen() {
            this.textShow = true;
        },
        close() {
            this.show = false;
        },
        loader(state) {
            if (state) {
                if (this.ajaxIndex === 0) this.ajaxLoader = true;
                this.ajaxIndex++;
            } else {
                setTimeout(() => {
                    this.ajaxIndex--;
                    if (this.ajaxIndex === 0) this.ajaxLoader = false;
                }, 300);
            }
        }
    },
    watch: {
        show(val) {
            if (val) {
                this._open();
            } else {
                this._close();
            }
        }
    }
};

</script>
