<style lang="scss" scoped>
.info-panel {
    opacity: 0;
    transform: translate(0, -.1rem);
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
                        &::after{
                        }
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
<template>
    <AskDialog :show.sync="show" :afterClose="_afterClose" :beforeClose="_beforeClose" @open="_dialogOpen">
        <div class="info-panel" :class="{'active': textShow }">
            <div class="title">个人信息</div>
            <div class="detail">
                <ul class="d-list">
                    <li class="d-item">
                        <div class="name">姓名:</div>
                        <div class="value">陈龙</div>
                    </li>
                    <li class="d-item">
                        <div class="name">工作:</div>
                        <div class="value">{{model.workYear}}(目前成都)</div>
                    </li>
                    <li class="d-item">
                        <div class="name">专业:</div>
                        <div class="value">软件开发(web方向)</div>
                    </li>
                </ul>
                <ul class="d-list">
                    <li class="d-item">
                        <div class="name">电话:</div>
                        <div class="value">181-1310-8597</div>
                    </li>
                    <li class="d-item">
                        <div class="name">求职意向:</div>
                        <div class="value">WEB前端开发工程师</div>
                    </li>
                    <li class="d-item">
                        <div class="name">学历:</div>
                        <div class="value">专科</div>
                    </li>
                </ul>
                <ul class="d-list">
                    <li class="d-item">
                        <div class="name">Email:</div>
                        <div class="value">chenlong8520@foxmail.com</div>
                    </li>
                    <li class="d-item">
                        <div class="name">年龄:</div>
                        <div class="value">{{model.age}}岁(1995年)</div>
                    </li>
                </ul>
            </div>
        </div>
    </AskDialog>
</template>
<script>
import AskDialog from '../src/ask-dialog.vue';
export default {
    name: 'DialogPersonal',
    components: {
        AskDialog
    },
    data() {
        return {
            show: false,
            ajaxLoader: false,
            ajaxIndex: 0,
            textShow: false,
            model: {
                work: [2015, 11, 1],
                workYear: 0,
                birthday: [1995, 3, 9],
                age: 0
            }
        };
    },
    mounted() {
        const nowDate = new Date();
        const workDate = new Date(...this.model.work);
        const ageDate = new Date(...this.model.birthday);
        this.model.workYear = (this.diffTime(workDate, nowDate) - 1) + '年+';
        this.model.age = this.diffTime(ageDate, nowDate);
    },
    methods: {
        diffTime(start, end) {
            console.log(end.getFullYear(), start.getFullYear());
            return end.getFullYear() - start.getFullYear();
        },
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
