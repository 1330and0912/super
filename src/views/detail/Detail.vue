<template>
    <div id="detail">
        <detail-nav-bar/>
        <detail-swiper :swiper-image="swiperImage"/>
        <detail-base-info :goods="goods"/>
    </div>
</template>

<script>
    import DetailNavBar from './childrenComponents/DetailNavBar'
    import DetailSwiper from './childrenComponents/DetailSwiper'
    import DetailBaseInfo from './childrenComponents/DetailBaseInfo'

    import {getDetail, Goods,Shop} from "network/detail";

    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo
        },
        props: ['id'],
        data() {
            return {
                iid: null,
                swiperImage: [],
                goods: {},
                shop: {}
            }
        },
        created() {
            this.iid = this.id
            getDetail(this.iid).then(res => {
                console.log(res)
                this.swiperImage = res.result.itemInfo.topImages
                const {result: data} = res
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                this.shop = new  Shop(data.shopInfo)
            })
        },
        activated() {

        }

    }
</script>

<style scoped>
    #detail {
        margin-top: 44px;
        margin-bottom: 49px;
    }
</style>