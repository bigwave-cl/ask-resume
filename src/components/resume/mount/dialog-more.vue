<style lang="scss" scoped>
.info-panel {
    opacity: 0;
    transform: translate(0, .1rem);
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
        @include flexLayout(flex,justify,normal);
        .d-list{
            width: 30%;
            flex: 0 0 30%;
            .d-item{
                padding: .2rem 0;
                .name{
                    font-size: .22rem;
                    padding: 0 .12rem;
                    color: rgba($primary--color-3,.8);
                    position: relative;
                    &::after{
                        content: '';
                        display: block;
                        width: .02rem;
                        height: .18rem;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translate(0,-50%);
                        z-index: 2;
                        background-color: $resume-bg-color;
                    }
                }
                .value{
                    font-size: .26rem;
                    color: $primary--color-3;
                    padding: .2rem .12rem 0;
                    a{
                        color: $resume-bg-color;
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
                    padding: 0;
                    .name{
                        font-size: .18rem;
                    }
                    .value{
                        font-size: .2rem;
                        padding: .1rem .12rem .1rem;
                        word-break: break-all;
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss">
    /* 进入过渡的状态 */
    .ask-dialog-slide-more-enter-active {
        animation: ask-dialog-slide-more-animation-enter .5s linear 1 both;
    }

    @keyframes ask-dialog-slide-more-animation-enter {
        0% {
            transform: translate(0, .2rem);
        }

        100% {
            transform: translate(0, 0);
            opacity: 1;
        }
    }

    /* 离开过渡的状态 */
    .ask-dialog-slide-more-leave-active {
        animation: ask-dialog-slide-more-animation-leave .5s linear 1 both;
    }

    @keyframes ask-dialog-slide-more-animation-leave {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }

        100% {
            transform: translate(0, .2rem);
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
        :transition="'ask-dialog-slide-more'">
        <div class="info-panel" :class="{'active': textShow }">
            <div class="title">社交</div>
            <div class="detail">
                <ul class="d-list">
                    <li class="d-item">
                        <div class="name">GitHub:</div>
                        <div class="value">
                            <a href="https://github.com/bigwave-cl" target="_blank">个人主页</a>
                        </div>
                    </li>
                    <li class="d-item">
                        <div class="name">简书:</div>
                        <div class="value">
                            <a href="https://www.jianshu.com/u/fc8d28c87a36" target="_blank">个人主页</a>
                        </div>
                    </li>
                </ul>
                <ul class="d-list">
                    <li class="d-item">
                        <div class="name">Gitee:</div>
                        <div class="value">
                            <a href="https://gitee.com/woyaoqu" target="_blank">个人主页</a></div>
                    </li>
                </ul>
                <ul class="d-list">
                    <li class="d-item">
                        <div class="name">bilibili:</div>
                        <div class="value">
                            <a href="https://space.bilibili.com/96252162" target="_blank">个人主页</a></div>
                    </li>
                </ul>
            </div>
        </div>
    </AskDialog>
</template>
<script>
import AskDialog from '../src/ask-dialog.vue';
export default {
    name: 'DialogMore',
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
