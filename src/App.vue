<template>
    <div id="app">
        <keep-alive exclude="Detail">
            <router-view/>
        </keep-alive>
        <main-tab-bar v-if="isShowMainTabBar"/>
    </div>
</template>

<script>
    import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

    export default {
        name: 'App',
        components: {
            MainTabBar
        },
        data() {
            return {
                isShowMainTabBar: true
            }
        },
        watch: {
            $route(to, from) {
                if (to.fullPath.search('detail') !== -1) {
                    this.isShowMainTabBar = false
                } else {
                    this.isShowMainTabBar = true
                }
            }
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
