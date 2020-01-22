<style lang="scss" scoped>
.resume-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    
}
</style>
<template>
    <main class="resume-content">
            <!-- <transition name="resume-slide-transition" mode="out-in"> -->
                <router-view />
            <!-- </transition> -->
    </main>
</template>
<script>
export default {
    name: 'ResumeLayout'
};
</script>
