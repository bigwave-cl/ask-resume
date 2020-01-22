<template>
    <div class="resume">
        <div class="r-canvas-box" ref="canvasBoxRef">
            <svg></svg>
        </div>
        <div class="r-personal-box" ref="rpbInfoRef">
            <div class="rpb-logo">
                <div class="img-box">
                    <img v-ask-lazy-image :data-src="logoSrc" alt="头像">
                </div>
            </div>
            <div class="overlay-circle" ref="overlayCircleRef" :class="{'active': overlayCircleToggle }"></div>
            <div class="rpb-info rpb-info__top">
                <h2 class="in__title">个人信息</h2>
            </div>
            <div class="rpb-info rpb-info__left">
                <h2 class="in__title">工作经历</h2>
            </div>
            <div class="rpb-info rpb-info__right">
                <h2 class="in__title">作品展示</h2>
            </div>
            <div class="rpb-info rpb-info__bottom">
                <h2 class="in__title">More</h2>
            </div>
        </div>
    </div>
</template>
<script>
import logoSrc from '@/assets/logo.png';
import { SvgBox } from './canvas-box.js';
import * as InfoPanel from '@core/resume/mount';
export default {
    name: 'Resume',
    data() {
        return {
            canvasBox: null,
            overlayCircleToggle: false,
            logoSrc: logoSrc,
            model: {
                name: '',
                pass: ''
            }
        };
    },
    created() {
        this.$store.dispatch('ajaxRequestStart');
    },
    mounted() {
        this.$nextTick(() => {
            this.canvasBox = new SvgBox({
                el: this.$refs.canvasBoxRef,
                on: {
                    init: () => {
                        this.$store.dispatch('ajaxRequestEnd');
                    },
                    resize() {},
                    click: (or) => {
                        this.overlayCircleToggle = true;
                        let _el = this.$refs.overlayCircleRef;
                        let _event = window.event;
                        let radius = Math.max(_el.parentNode.clientWidth, _el.parentNode.clientHeight);
                        _el.style.backgroundColor = or.color;
                        _el.style.left = `${_event.offsetX}px`;
                        _el.style.top = `${_event.offsetY}px`;
                        _el.style.width = `${radius}px`;
                        _el.style.height = `${radius}px`;
                        setTimeout(() => {
                            let fName = or.tab;
                            InfoPanel['dialog' + fName]({
                                afterClose: () => {
                                    _el.style.left = `50%`;
                                    _el.style.top = `50%`;
                                    this.overlayCircleToggle = false;
                                }
                            });
                        }, 500);
                    }
                }
            });
        });
    },
    methods: {}
};

</script>
<style lang="scss" scoped>
.resume {
    width: 100%;
    height: 100%;
    min-height: 50vw;
    position: relative;
    .r-canvas-box {
        width: 100%;
        height: 100%;
        // background-color: $resume-bg-color;
        position: relative;
        overflow: hidden;

        svg{
            width: 100%;
            height: 100%;

            ::v-deep .chart-source-group{
                path.triangle{
                    cursor: pointer;
                    &.personal{
                        transform-origin: 50% 0;
                    }
                    &.work{
                        transform-origin: 0 50%;
                    }
                    &.more{
                        transform-origin: 50% 100%;
                    }
                    &.project{
                        transform-origin: 100% 50%;
                    }

                    // &.node-hover{
                    //     transform: scale(1.1);
                    // }
                }
            }
        }
    }

    .r-personal-box{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 300;
        pointer-events: none;
        .overlay-circle{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) scale(0);
            border-radius: 100%;
            background-color: #000;
            width: 50vw;
            height: 50vw;
            z-index: 100;
            transition: transform .5s linear;
            &.active{
                transform: translate(-50%,-50%) scale(3);
            }
        }
        .rpb-logo{
            width: 20%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            pointer-events: auto;
            .img-box {
                position: relative;
                overflow: hidden;
                width: 100%;
                margin: 0 auto;
                padding: 50% 0;
                cursor: pointer;
                border-radius: 100%;
                box-sizing: content-box;
                background-color: $resume-logo-color;

                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }

                &:hover {
                    animation: btnGroups 1s linear;

                    @keyframes btnGroups {
                        0% {
                            transform: scale(1.2, .8);
                        }

                        1% {
                            transform: scale(1.18, .82);
                        }

                        2% {
                            transform: scale(1.16, .84);
                        }

                        3% {
                            transform: scale(1.13, .87);
                        }

                        4% {
                            transform: scale(1.1, .9);
                        }

                        5% {
                            transform: scale(1.07, .93);
                        }

                        6% {
                            transform: scale(1.04, .96);
                        }

                        24%,
                        34%,
                        35%,
                        36%,
                        7% {
                            transform: scale(1.01, .99);
                        }

                        21%,
                        40%,
                        41%,
                        42%,
                        43%,
                        44%,
                        45%,
                        46%,
                        47%,
                        48%,
                        8% {
                            transform: scale(.99, 1.01);
                        }

                        9% {
                            transform: scale(.97, 1.03);
                        }

                        10%,
                        18% {
                            transform: scale(.95, 1.05);
                        }

                        11%,
                        16%,
                        17% {
                            transform: scale(.94, 1.06);
                        }

                        12%,
                        13%,
                        14%,
                        15% {
                            transform: scale(.93, 1.07);
                        }

                        19% {
                            transform: scale(.96, 1.04);
                        }

                        20% {
                            transform: scale(.98, 1.02);
                        }

                        22%,
                        23%,
                        37%,
                        38%,
                        39%,
                        49% {
                            transform: scale(1, 1);
                        }

                        25%,
                        26%,
                        27%,
                        30%,
                        31%,
                        32%,
                        33% {
                            transform: scale(1.02, .98);
                        }

                        28%,
                        29% {
                            transform: scale(1.03, .97);
                        }
                    }
                }
            }
        }
        .rpb-info{
            left: 50%;
            top: 50%;
            position: absolute;
            display: inline-block;
            .in__title{
                color: $primary--color-0;
                font-size: .42rem;
                font-weight: normal;
            }
            &.rpb-info__top{
                white-space: nowrap;
                transform: translate(-50%,-4.2rem);
                &::after{
                    content:'';
                    display: block;
                    width: 100%;
                    height: .2rem;
                    border-top: .02rem solid $primary--color-0;
                    border-bottom: .02rem solid $primary--color-0;
                    position: absolute;
                    bottom: 0;
                    left: 0 ;
                    transform: translate(0, 50%) skewX(15deg) skewY(-15deg);
                    z-index: 2;
                }
                &::before{
                    content:'';
                    display: block;
                    width: 50%;
                    height: .2rem;
                    border-top: .02rem solid $primary--color-0;
                    border-bottom: .02rem solid $primary--color-0;
                    position: absolute;
                    bottom: 0;
                    left: 0 ;
                    transform: translate(0, 50%) skewX(15deg) skewY(-15deg);
                    z-index: 2;
                }
            }
            &.rpb-info__bottom{
                white-space: nowrap;
                transform: translate(-50%,3rem);
                &::after{
                    content:'';
                    display: block;
                    width: 110%;
                    padding: 30% 0;
                    border: .04rem solid $primary--color-0;
                    position: absolute;
                    bottom: 0;
                    left: 0 ;
                    transform: translate(0, 40%) skewX(15deg) skewY(-15deg);
                    z-index: 2;
                    border-radius: 100%;
                }
            }
            &.rpb-info__left{
                width: .42rem;
                transform: translate(-5rem,-50%);
                &::after{
                    content:'';
                    display: block;
                    width: .04rem;
                    height: 80%;
                    position: absolute;
                    top: 50%;
                    left: 0 ;
                    transform: translate(-.3rem, -50%);
                    z-index: 2;
                    background-color: $primary--color-0;
                }
                &::before{
                    content:'';
                    display: block;
                    width: .04rem;
                    height: 20%;
                    position: absolute;
                    bottom: 0;
                    left: 0 ;
                    transform: translate(-.3rem, 0) skewX(-45deg);
                    z-index: 2;
                    background-color: $primary--color-0;
                }
            }
            &.rpb-info__right{
                width: .42rem;
                transform: translate(5rem,-50%);
                &::after{
                    content:'';
                    display: block;
                    width: 110%;
                    padding: 30% 0;
                    border: .04rem solid $primary--color-0;
                    position: absolute;
                    bottom: 0;
                    left: 0 ;
                    transform: translate(0, 40%) skewX(15deg) skewY(-15deg);
                    z-index: 2;
                    border-radius: 40% 30% 50% 100%/ 40% 30% 50% 100%;
                }
                &::before{
                    content:'';
                    display: block;
                    width: .04rem;
                    height: 20%;
                    position: absolute;
                    border-radius: 0 0 100% 100%/ 0 0 100% 100%;
                    bottom: 0;
                    right: 0 ;
                    transform: translate(0, 0) skewX(-45deg);
                    z-index: 2;
                    background-color: $primary--color-0;
                }
            }
        }
    }
}
@media only screen and ($mobile-tag: $mobile-size) {
    .resume{
        .r-personal-box{
            .rpb-info{
                .in__title{
                    font-size: .26rem;
                }
                &.rpb-info__top{
                    transform: translate(-50%,-2.2rem);
                }
                &.rpb-info__bottom{
                    transform: translate(-50%,1.4rem);
                }

                &.rpb-info__left{
                    width: .26rem;
                    transform: translate(-1.1rem,-50%);
                }

                &.rpb-info__right{
                    width: .26rem;
                    transform: translate(1.1rem,-50%);
                }
            }
        }
    }
}
</style>
