<style lang="scss" scoped>
.info-panel {
    opacity: 0;
    transform: translate(.1rem, 0);
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
            &::after{
                content: '';
                display: block;
                clear: both;
                visibility: hidden;
                font-size: 0;
                line-height: 0;
            }
            .d-item{
                width: 49%;
                float: left;
                padding: .2rem 0 .2rem .2rem;
                @include flexLayout(flex,normal,normal);
                /* cursor: pointer; */
                .cover{
                    width: 1.1rem;
                    padding: .1rem .1rem .1rem 0;
                    height: 1.2rem;
                    flex: 0 0 1.1rem;
                    overflow: hidden;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: .08rem;
                    }
                }
                .box{
                    flex: 0 0 calc(100% - 1.1rem - .8rem);
                    width: calc(100% - 1.1rem - .8rem);
                    border-bottom: 1px solid rgba($primary--color-3,.3);
                    @include flexLayout(flex,center,normal);
                    flex-flow: column;
                    .name{
                        font-size: .2rem;
                        color: $primary--color-3;
                    }
                    .value{
                        width: 100%;
                        font-size: .16rem;
                        color: rgba($primary--color-3,.5);
                        padding: .08rem 0;
                        min-height: .36rem;
                        @include textEllipsis();
                        &.small{
                            font-size: .14rem;
                            padding: 0;
                            min-height: auto;
                        }
                    }
                }
                .btn{
                    flex: 0 0 .8rem;
                    width: .8rem;
                    border-bottom: 1px solid rgba($primary--color-3,.3);
                    @include flexLayout(flex,normal,center);
                    a{
                        display: block;
                        width: 80%;
                        margin-left: auto;
                    }
                    button{
                        font-size: .16rem;
                        display: block;
                        width: 100%;
                        margin: 0;
                        padding: .04rem 0;
                        font-weight: blod;
                        cursor: pointer;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        text-align: center;
                        white-space: nowrap;
                        text-decoration: none;
                        text-transform: uppercase;
                        color: $resume-bg-color;
                        border: none;
                        border-radius: .16rem/50%;
                        outline: 0;
                        background-color: rgba($primary--color-3,.15);
                        -webkit-tap-highlight-color: transparent;
                        -webkit-appearance: button;
                        -moz-appearance: button;
                        appearance: button;
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
                    padding: .1rem 0;
                    .cover{
                       width: .81rem;
                       height: .82rem;
                       flex: 0 0 .81rem;
                    }
                    .box{
                        flex: 0 0 calc(100% - .81rem - .6rem);
                        width: calc(100% - .81rem - .6rem);
                        .name{
                            font-size: .16rem;
                        }
                        .value{
                            font-size: .14rem;
                            padding: .06rem 0;
                            min-height: auto;
                            &.small{
                                font-size: .12rem;
                                padding: 0;
                            }
                        }
                    }
                    .btn{
                        flex: 0 0 .6rem;
                        width: .6rem;
                        a{
                            width: 90%;
                        }
                        button{
                            font-size: .14rem;
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
    .ask-dialog-slide-project-enter-active {
        animation: ask-dialog-slide-project-animation-enter .5s linear 1 both;
    }

    @keyframes ask-dialog-slide-project-animation-enter {
        0% {
            transform: translate(.2rem, 0);
        }

        100% {
            transform: translate(0, 0);
            opacity: 1;
        }
    }

    /* 离开过渡的状态 */
    .ask-dialog-slide-project-leave-active {
        animation: ask-dialog-slide-project-animation-leave .5s linear 1 both;
    }

    @keyframes ask-dialog-slide-project-animation-leave {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }

        100% {
            transform: translate(.2rem, 0);
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
        :transition="'ask-dialog-slide-project'">
        <div class="info-panel" :class="{'active': textShow }">
            <div class="title">作品展示</div>
            <div class="detail">
                <ul class="d-list">
                    <li class="d-item" v-for="(item,$i) in list" :key="$i">
                        <div class="cover">
                            <img v-ask-lazy-image :data-src="item.cover" alt="图片">
                        </div>
                        <div class="box">
                            <div class="name">{{item.title}}</div>
                            <div class="value">{{item.desc}}</div>
                            <div class="value small">{{item.create}}</div>
                        </div>
                        <div class="btn">
                            <a :href="item.href" target="_blank">
                                <button type="button">打开</button>
                            </a>
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
    name: 'DialogProject',
    components: {
        AskDialog
    },
    data() {
        return {
            show: false,
            ajaxLoader: false,
            ajaxIndex: 0,
            textShow: false,
            list: [{
                title: '设备监控',
                desc: '借助D3.js绘制的监控大屏',
                href: 'http://www.askmewhy.cn/monitor',
                cover: require('@/assets/p6.png'),
                create: '2020年02月xx日'
            }, {
                title: '安全递送',
                desc: '后台配置项目，包含地图组件',
                href: 'http://www.askmewhy.cn/soft-delivery-pro',
                cover: require('@/assets/p2.png'),
                create: '2018年08月xx日'
            }, {
                title: '百货商城',
                desc: '移动端商城',
                href: 'http://www.askmewhy.cn/merchant-store',
                cover: require('@/assets/p4.png'),
                create: '2018年09月xx日'
            }, {
                title: '账单项目',
                desc: '一个可以算账的网页',
                href: 'http://www.askmewhy.cn/bill',
                cover: require('@/assets/p3.png'),
                create: '2017年06月xx日'
            }, {
                title: '网页时钟',
                desc: '简单的桌面展示时钟',
                href: 'http://www.askmewhy.cn/ask-clock',
                cover: require('@/assets/p1.png'),
                create: '2019年07月xx日'
            }, {
                title: '预售网页',
                desc: '非常简单的展示内容网站',
                href: 'http://www.askmewhy.cn/adv',
                cover: require('@/assets/p5.png'),
                create: '2019年06月xx日'
            }]
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
