<template>
    <div id="detail">

        <detail-nav-bar @titleClick="titleClick"/>
        <scroll class="contant" ref="scroll">
            <detail-swiper :swiper-image="swiperImage"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo"/>
            <detail-params-info :item-params="itemParams"/>
            <detail-comment-info :rate="rate"/>
            <div class="recommend-wrap">
                <header>推荐商品</header>
                <goods-list class="recommend" :goods-list="recommend"/>
            </div>
        </scroll>

    </div>
</template>

<script>
    import DetailNavBar from './childrenComponents/DetailNavBar'
    import DetailSwiper from './childrenComponents/DetailSwiper'
    import DetailBaseInfo from './childrenComponents/DetailBaseInfo'
    import DetailShopInfo from './childrenComponents/DetailShopInfo'
    import DetailGoodsInfo from './childrenComponents/DetailGoodsInfo'
    import DetailParamsInfo from './childrenComponents/DetailParamsInfo'
    import DetailCommentInfo from './childrenComponents/DetailCommentInfo'
    import GoodsList from 'components/content/goods/GoodsList'

    import {getDetail, Goods, Shop, getRecommend} from "network/detail";

    import {debounce} from "common/utils";
    import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamsInfo,
            DetailCommentInfo,
            GoodsList,
            Scroll
        },
        props: ['id'],
        data() {
            return {
                iid: null,
                swiperImage: [],
                goods: {},
                shop: {},
                detailInfo: {},//商品详情信息
                itemParams: {//商品参数信息
                    info: [],
                    sizes: []
                },
                rate: {},//评论信息,
                recommend: []
            }
        },
        created() {
            this.iid = this.id

            //推荐栏信息
            getRecommend().then(
                res => {
                    this.recommend = res.data.list
                }
            )
            getDetail(this.iid).then(res => {
                //console.log(res)

                //商品详情数据
                const {result: data} = res

                //轮播图图片
                this.swiperImage = data.itemInfo.topImages

                //商品数据
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                //店铺信息
                this.shop = new Shop(data.shopInfo)

                // 商品详细信息
                this.detailInfo = data.detailInfo

                //商品参数
                this.itemParams.info = data.itemParams.info.set
                this.itemParams.sizes = data.itemParams.rule.tables

                // 商品评论数据
                this.rate = data.rate

            })
        },

        mounted() {
            this.imgLoad()
        },
        methods: {
            imgLoad() {
                let refresh = debounce(this.$refs.scroll.refresh, 100)
                this.$bus.$on('imgLoad', () => {
                    refresh && refresh()
                })
            },
            titleClick() {
                console.log(1)
            }
        }
    }
</script>

<style scoped>
    #detail {
        display: revert;
        z-index: 99991;
        margin-top: 44px;
        height: 100vh;
    }

    .contant {
        height: calc(100% - 44px);
    }

    .recommend-wrap {
        padding: 0 5px;
    }

    header {
        margin: 10px;
    }

    .recommend {
        margin-top: 20px;
    }
</style>