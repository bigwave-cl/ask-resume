<style lang="scss" scoped>
.info-panel {
    opacity: 0;
    transform: translate(-.1rem, 0);
    transition: opacity .3s linear, transform .3s linear;
    padding: 20% 0 0;

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
                           color: rgba($primary--color-1,.5);
                           line-height: 1.8;
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
                            <div class="i__text">web前端开发工程师</div>
                            <div class="i__text small">2018年12月-至今</div>
                        </div>
                        <div class="i__body">
                            <div class="i_btext">1、主导开发公司otc系统化并独立设计公共模块，前端api体系高度灵活的配置和调用性获得项目成员的一致认同</div>
                            <div class="i_btext">2、重构前端与设备的对接接口系统，供4个项目同时使用，降低维护时间和提高调用灵活度</div>
                            <div class="i_btext">3、优化网页动画效果，使动画大致保持在60fps，同时优化弹窗触发和调用习惯</div>
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
