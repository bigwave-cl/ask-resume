<template>
    <div class="ask-dialog" @click.stop="''">
        <div class="ask-d-overlay"></div>
        <div class="ask-d-close" @click="close"><span class="icon"></span></div>
        <transition :name="transition" @after-enter="afterEnter" @after-leave="afterLeave">
            <div class="ask-d-main" v-if="show">
                <div class="ask-d-body">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'AskDialog',
    props: {
        show: {
            type: Boolean,
            default: false // 是否显示，默认不显示
        },
        transition: {
            type: String,
            default: 'ask-dialog-slide' // 弹框进场和离场样式名
        },
        beforeClose: {
            type: Function,
            default: null
        },
        afterClose: {
            type: Function,
            default: null
        }
    },
    data() {
        return {};
    },
    methods: {
        close() {
            if (this.beforeClose && Object.prototype.toString.call(this.beforeClose) === '[object Function]') {
                this.beforeClose(this.closeModal);
            } else {
                this.closeModal();
            }
        },
        closeModal() {
            this.$emit('update:show', false);
        },
        afterEnter() {
            this.$emit('open');
        },
        afterLeave() {
            this.$nextTick(function() {
                this.$el.remove && this.$el.remove();
                this.afterClose && this.afterClose(this);
            });
        },
        open() {
            document.body.appendChild(this.$el);
            this.$emit('update:show', true);
        }
    },
    mounted() {
        if (this.show) {
            this.open();
        }
    },
    watch: {
        show: function(n, o) {
            if (n) {
                this.open();
            } else {
                this.close();
                this.$emit('close');
            }
        }
    }
};

</script>
<style lang="scss" scoped>
.ask-dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    padding: 0;
    z-index: 300;
    pointer-events: auto;

    .ask-d-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        width: 100%;
        height: 100%;
        padding: 0;
        cursor: pointer;
        z-index: 1;
    }

    .ask-d-close {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        cursor: pointer;
        background-color: rgba($primary--color-1, .4);
        padding: .1rem .2rem .4rem .4rem;
        border-radius: 0 0 0 100%/0 0 0 100%;

        .icon {
            position: relative;
            display: block;
            width: .4rem;
            height: .4rem;
            transform: translate(0, 0) rotate(45deg);

            &::after,
            &::before {
                position: absolute;
                content: '';
                -webkit-transition: background .2s;
                transition: background .2s;
                border-radius: 100%;
                background: rgba($primary--color-0, .8);
            }

            &::before {
                top: 50%;
                left: 0;
                width: 100%;
                height: .04rem;
                margin-top: -.02rem;
            }

            &::after {
                top: 0;
                left: 50%;
                width: .04rem;
                height: 100%;
                margin-left: -.02rem;
            }

            &:hover::after,
            &:hover::before {
                background: $primary--color-0;
            }
        }
    }

    .ask-d-main {
        position: relative;
        overflow: auto;
        width: 70%;
        height: 100%;
        margin: 0 auto;
        z-index: 3;
        background-color: #e4f5ef;
        padding: .2rem .32rem;
        .ask-d-body{
            width: 100%;
            height: 100%;
        }
    }
}

/* 进入过渡的状态 */
.ask-dialog-slide-enter-active {
    animation: ask-dialog-slide-animation-enter .5s linear 1 both;
}

@keyframes ask-dialog-slide-animation-enter {
    0% {
        transform: translate(0, -.2rem);
    }

    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}

/* 离开过渡的状态 */
.ask-dialog-slide-leave-active {
    animation: ask-dialog-slide-animation-leave .5s linear 1 both;
}

@keyframes ask-dialog-slide-animation-leave {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }

    100% {
        transform: translate(0, -.2rem);
        opacity: 0;
    }
}


@media only screen and ($mobile-tag: $mobile-size) {
    .ask-dialog{
        @include flexLayout(flex,center,center);
        .ask-d-main{
            width: 80%;
            min-width: 3rem;
            height: 4rem;
            max-height: 680px;
            padding: 0;
        }
    }
}

</style>
