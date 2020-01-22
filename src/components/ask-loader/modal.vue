<style lang="scss" scoped>
.ask-loader-layout {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    padding: 0;
    z-index: 800;
    pointer-events: auto;
    background-color: #fff;
    @include flexLayout(flex,center,center);
    .all-wrapper{
        position: relative;
        overflow: visible;
        background: #fff;
        width: .5rem;
        height: .5rem;
        border-radius: .05rem;
        ::v-deep{
            .ask-loader{
                width: 100%;
                height: 100%;
            }
        }
    }
}


/* 进入过渡的状态 */
.ask-loader-fade-enter-active {
    animation: ask-loader-fade-animation-enter .3s linear 1 both;
}

@keyframes ask-loader-fade-animation-enter {
    0% {
    }

    100% {
        opacity: 1;
    }
}

/* 离开过渡的状态 */
.ask-loader-fade-leave-active {
    animation: ask-loader-fade-animation-leave .3s linear 1 both;
}

@keyframes ask-loader-fade-animation-leave {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
<template>
    <transition name="ask-loader-fade"  @after-leave="afterLeave">
        <div class="ask-loader-layout" v-if="show">
            <div class="all-wrapper">
                <ask-loader />
            </div>
        </div>
    </transition>
</template>
<script>
import AskLoader from './index.vue';
export default {
    name: 'AskLoaderM',
    components: { AskLoader },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: 'green'
        },
        indeterminate: {
            type: Boolean,
            default: true
        },
        rotate: {
            type: [String, Number],
            default: 0
        },
        size: {
            type: [String, Number],
            default: 32
        },
        value: {
            type: [String, Number],
            default: 0
        },
        width: {
            type: [String, Number],
            default: 4
        }
    },
    methods: {
        close() {
            this.closeModal();
        },
        closeModal() {
            this.$emit('update:show', false);
        },
        afterLeave() {
            this.$nextTick(function() {
                this.$el.remove && this.$el.remove();
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
            }
        }
    }
};

</script>
