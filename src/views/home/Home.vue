<template>
    <div class="wrap">
        <!-- 导航组件-->
        <nav-bar>
            <nav slot="center">购物车</nav>
        </nav-bar>
        <!--轮播图组件-->
        <home-swiper :banners="banners"/>

        <!-- 展示栏-->
        <home-recommend-view :recommends="recommend.list"/>
    </div>
</template>

<script>

    //请求首页数据
    import {getHomeMultiData} from "network/home"

    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childrenCompons/HomeSwiper'
    import HomeRecommendView from './childrenCompons/HomeRecommendView'

    export default {
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommendView
        },
        data() {
            return {
                //轮播图数据
                banners: [],
                dKeyword: null,
                keywords: null,
                recommend: null
            }
        },
        async created() {
            const {data: result} = await getHomeMultiData()
            // console.log(result);
            const {banner, dKeyword, keywords, recommend} = result.data
            this.banners = banner.list
            this.dKeyword = dKeyword
            this.keywords = keywords
            this.recommend = recommend
        },
        mounted() {

        }

    }
</script>

<style scoped>

</style>
