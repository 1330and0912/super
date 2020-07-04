<template>
    <div class="detail-nav-bar">
        <nav-bar class="nav-bar">
            <template slot="left">
                <img @click="back" class="back" slot="left" src="~assets/img/common/back.svg" alt="">
            </template>
            <ul class="nav" slot="center">
                <li @click="isActiveNavBar(index)" :class="{'active-title':currentIndex === index}"
                    v-for="(item,index) in title">{{item}}
                </li>
            </ul>
        </nav-bar>
    </div>

</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'

    export default {
        name: "DetailNavBar",
        components: {NavBar},
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        methods: {
            isActiveNavBar(index) {
                this.currentIndex = index
                this.$emit('titleClick', index) //监听导航栏跳转功能
            },
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

    .nav-bar {
        background-color: #fff;
        color: #666;

    }

    .nav {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 14px;
    }

    .back {
        margin-top: 10px;
        margin-left: 20px;
    }

    .active-title {
        color: var(--color-tint);
    }
</style>