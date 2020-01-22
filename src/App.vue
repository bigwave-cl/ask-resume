<style src="./assets/font/iconfont.css" lang="css"></style>
<style src="./styles/base.scss" lang="scss"></style>
<template>
    <div class="wrapper">
        <router-view />
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'App',
    components: {},
    computed: {
        ...mapState({
            ajaxLoader: state => state.ajaxLoader
        })
    },
    watch: {
        ajaxLoader(val) {
            this.$askLoader(val);
        }
    }
};

</script>
