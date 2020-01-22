<template>
    <div class="ask-loader">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715" style="transform: rotate(0deg);">
            <circle fill="transparent" cx="45.714285714285715" cy="45.714285714285715" r="20" stroke-width="4" :stroke="color" stroke-dasharray="125.664" stroke-dashoffset="125.66370614359172px" class="v-progress-circular__overlay"></circle>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'AskLoader',
    props: {
        color: {
            type: String,
            default: '#1867c0'
        }
    }
};

</script>
<style lang="scss" scoped>
.ask-loader {
    display: inline-block;
    width: .42rem;
    height: .42rem;
    padding: .1rem;
    -webkit-box-shadow: none;
    box-shadow: none;

    svg {
        width: 100%;
        height: 100%;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation: progress-circular-rotate 1.4s linear infinite;
        animation: progress-circular-rotate 1.4s linear infinite;

        .v-progress-circular__overlay {
            -webkit-animation: progress-circular-dash 1.4s ease-in-out infinite;
            animation: progress-circular-dash 1.4s ease-in-out infinite;
            stroke-linecap: round;
            stroke-dasharray: 80, 200;
            stroke-dashoffset: 0;
        }
    }

    @-webkit-keyframes progress-circular-rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes progress-circular-rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes progress-circular-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -15px;
        }

        100% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -125px;
        }
    }

    @keyframes progress-circular-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -15px;
        }

        100% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -125px;
        }
    }
}

</style>
