<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props: {
            recommends: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        padding: 10px 0 20px;
        display: flex;
        border-bottom: 10px solid #eee;
        font-size: 12px;
    }
    .recommend .recommend-item {
        flex:1;
        text-align: center;

    }
    .recommend img {
        width: 80%;
        padding-bottom: 5px;
    }
</style>