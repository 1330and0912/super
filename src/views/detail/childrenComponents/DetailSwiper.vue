<template>
    <div class="detail-swipe">
        <van-swipe @change="swipeChange" height="316" :autoplay="3000" indicator-color="red">
            <van-swipe-item v-for="(image, index) in swiperImage" :key="index">
                <img v-lazy="image"/>
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                    {{indicatorNumber}}
                </div>
            </template>
        </van-swipe>
    </div>

</template>

<script>
    export default {
        name: "DetailSwiper",
        props: {
            swiperImage: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                current:1,//轮播图索引
            }
        },
        methods: {
            swipeChange(index) {
                this.current = index+1
            }
        },
        computed: {
            indicatorNumber() {
                return `${this.current}/${this.swiperImage.length}`
            }
        }
    }
</script>

<style scoped>
    .detail-swipe {
        width: 100%;
        height: 280px;
        overflow: hidden;
        position: relative;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .van-swipe-item {
        float: left;
    }
    .van-swipe__indicators {
        height: 10px;
    }
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 1);
    }
</style>