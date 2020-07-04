<template>
    <div @click="goDetail" class="goods-list-item">
        <img :src="productImg" alt="">
        <p class="title">{{goodsItem.title}}</p>
        <div class="introduction">
            <span class="price">{{goodsItem.price}}</span>
            <span
                    class="collect"
                    @touchend="collectTouchEnd"
                    @touchmove="collectTouchMove"
            >
                <img @load="imageLoad" :src="collectImgPath" alt="">{{goodsItem.cfav}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: Object,
            default() {
                return {}
            }
        },

        data() {
            return {
                isMove: true,//判断是否有移动鼠标
                collectImgPath: require('D:\\web\\supermall\\src\\assets\\img\\common\\favor.png'),
                isCollect: false
            }
        },
        computed: {
            productImg() {
                return this.goodsItem.image || this.goodsItem.show.img
            }
        },
        methods: {
            collectTouchEnd() {
                if (this.isMove && !(this.isCollect)) {
                    this.collectImgPath = require('D:\\web\\supermall\\src\\assets\\img\\detail\\collect.png')
                    this.isCollect = true
                } else if (this.isMove) {
                    this.collectImgPath = require('D:\\web\\supermall\\src\\assets\\img\\common\\favor.png')
                    this.isCollect = false
                }
                this.isMove = true
            },
            collectTouchMove() {
                this.isMove = false
            },
            imageLoad() {
                this.$bus.$emit('goodsItemImgLoaded')
            },
            goDetail() {
                this.$router.push({
                    name: 'detail',
                    params: {
                        id: this.goodsItem.iid
                    }
                })
            }


        }
    }
</script>

<style scoped>
    .goods-list-item {
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(22, 20, 20, .2);
        width: 48%;
        margin-bottom: 10px;
        padding-bottom: 5px;
    }

    .goods-list-item > img {
        width: 100%;
        height: 240px;
        border-radius: 5px;
    }

    .introduction {
        padding: 0 8px;
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    }

    .title {
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .price {
        color: var(--color-high-text);
        font-size: 14px;
        font-weight: bold;
    }

    .price::before {
        content: '￥';
    }

    .collect {
        padding-right: 4px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .collect img {
        vertical-align: middle;
        width: 12%;

    }

</style>