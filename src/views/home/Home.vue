<template>
    <div id="home">
        <!-- 导航组件-->
        <nav-bar>
            <nav slot="center">首页</nav>
        </nav-bar>
        <scroll @pullingUp="pullOnLoad" @scroll="scrolling"  class="wrap" ref="scroll" :probe-type="3"
                :pull-up-load="true">
            <!--轮播图组件-->
            <home-swiper :banners="banners"/>
            <!-- 展示栏-->
            <home-recommend-view :recommends="recommend"/>
            <!-- 特性视图-->
            <feature-view/>
            <!--tab栏-->
            <tab-control ref="tab-control" @tab-click="tabClick" :title="title"/>
            <!-- 商品列表-->
            <goods-list :goodsList="showGoodsType"/>
        </scroll>
        <!--回到顶部按钮-->
        <back-top v-show="isShowBackTop" @click.native="backTopClick"/>

    </div>
</template>

<script>
    import {debounce} from "common/utils";
    //请求首页数据
    import {getHomeGoods, getHomeMultiData} from "network/home";
    //公共组件
    import NavBar from 'components/common/navbar/NavBar'//导航栏
    import Scroll from 'components/common/scroll/Scroll'//滚动组件
    import BackTop from 'components/content/backtop/BackTop'
    //业务组件
    import TabControl from 'components/content/tabControl/TabControl'//tab切换栏
    import HomeSwiper from './childrenCompons/HomeSwiper'//轮播图
    import HomeRecommendView from './childrenCompons/HomeRecommendView'//推荐栏
    import FeatureView from './childrenCompons/FeatureView'//特性视图
    import GoodsList from 'components/content/goods/GoodsList'

    export default {
        components: {
            NavBar,
            Scroll,
            BackTop,
            TabControl,
            HomeSwiper,
            HomeRecommendView,
            FeatureView,
            GoodsList
        },
        data() {
            return {
                //轮播图数据
                banners: [],
                recommend: [],
                title: ['流行', '新款', '精选'],
                goods: {//商品数据
                    pop: {page: 0, list: []},
                    new: {page: 0, list: []},
                    sell: {page: 0, list: []}
                },
                currentGoodsType: 'pop',
                isShowBackTop: false,

            }
        },
        created() {
            this.getHomeBannerAndRecommend()
            this.getProductData('pop')
            this.getProductData('sell')
            this.getProductData('new')

        },
        watch: {
            currentGoodsType() {
                console.log(this.$refs.scroll.scroll.scrollerHeight);
                let refresh = debounce(this.$refs.scroll.refresh, 100)
                refresh()
            }
        },
        methods: {
            //回到顶部
            backTopClick() {
                this.$refs.scroll.scrollTop && this.$refs.scroll.scrollTop(0, 0, 800)
            },
            //控制是否显示回到顶部按钮
            scrolling({y}) {
                this.isShowBackTop = y <= -1000 ? true : false
            },
            //上拉加载
            pullOnLoad() {
                this.getProductData(this.currentGoodsType)
                console.log('1');
            },
            //tab栏切换
            tabClick(index) {
                if (index == 0) {
                    this.currentGoodsType = 'pop'
                } else if (index == 1) {
                    this.currentGoodsType = 'new'
                } else {
                    this.currentGoodsType = 'sell'
                }
            },
            //轮播图和推荐栏数据
            async getHomeBannerAndRecommend() {
                const {data: result} = await getHomeMultiData()
                const {banner, recommend} = result
                this.banners = banner.list
                this.recommend = recommend.list
            },
            //获取商品数据
            async getProductData(type) {
                const page = this.goods[type].page + 1
                const {data} = await getHomeGoods(type, page)
                this.goods[type].list.push(...data.list)
                this.goods[type].page += 1
                this.$refs.scroll.finishPullUp()
            },
            isRefresh() {
                let refresh = debounce(this.$refs.scroll.refresh, 100)
                this.$bus.$on('goodsItemImgLoaded', () => {
                    refresh && refresh()
                })
            }

        },
        computed: {
            //返回要展示类型的商品列表数据
            showGoodsType() {
                return this.goods[this.currentGoodsType].list
            }
        },
        mounted() {
            this.isRefresh()
        },
    }

</script>

<style scoped>
    #home {
        margin: 44px 0px 49px 0;
    }

    .wrap {
        margin-top: 44px;
        height: 100vh;
    }
</style>
