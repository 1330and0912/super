<template>
    <div class="feature-view">
        <img src="~assets/img/home/recommend_bg.jpg" alt="">

    </div>

</template>

<script>
    export default {
        name: "FeatureView",
        mounted() {
            console.log('this is Feature')
        }
    }
</script>

<style scoped>
    .feature-view {
        width: 100%;
    }
    .feature-view img {
        width: 100%;
    }
</style>