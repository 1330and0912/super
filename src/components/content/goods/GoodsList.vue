<template>
    <div class="goods-list">
        <goods-list-item :key="index" :goods-item="item" v-for="(item,index) in goodsList"/>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'

    export default {
        name: "GoodsList",
        components: {GoodsListItem},
        props: {
            goodsList: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .goods-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>