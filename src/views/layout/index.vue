<template>
    <el-container style="height: 100%;">
        <el-header>
            <el-button type="warning" @click="logout">退出登录</el-button>
        </el-header>
        <el-container>
            <el-aside width="3rem" style="background-color: rgb(238, 241, 246)">
                <MenuLlist/>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import MenuLlist from '@core/menu-list';
export default {
    name: 'BaseLayout',
    components: {
        MenuLlist
    },
    methods: {
        async logout() {
            const response = await this.$store.dispatch('logout');
            console.log(response);
            this.$router.push('/login');
        }
    }
};

</script>
