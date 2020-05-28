<template>
    <div class="wrap">
        <nav-bar>
            <nav slot="center">购物车</nav>
        </nav-bar>
        <swiper>
            <swiper-item v-for="item in banners">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {getHomeMultiData} from "network/home"
    import NavBar from 'components/common/navbar/NavBar'
    import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
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

        },
        components: {
            NavBar,
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>

</style>
