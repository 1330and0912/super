<template>
    <div class="detail-base-info">
        <div class="goods-title">
            <h5>
                {{goods.title}}
            </h5>
        </div>
        <div class="goods-price">
            <span class="price">{{goods.newPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span class="discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
        </div>
        <div class="goods-other">
            <span class="other-item" v-for="item in goods.columns">
                {{item}}
            </span>
        </div>
        <div class="goods-service">
            <div class="service" v-for="item in goods.services">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props: {
            goods: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .detail-base-info {
        border-bottom: solid 8px #F2F5F8;
        margin-top: 15px;
        padding: 0 8px;

        .goods-price {
            margin: 10px 0 15px;

            .price {
                font-size: 24px;
                color: var(--color-tint);
            }

            .old-price {
                padding-left: 3px;
                font-size: 13px;
                color: #A2A2A2;
                text-decoration: line-through #999999;
            }

            .discount {
                display: inline-block;
                font-size: 12px;
                color: #fff;
                border-radius: 6px;
                padding: 2px 5px;
                vertical-align: top;
                margin-left: 4px;
            }
        }

        .goods-other {
            display: flex;
            justify-content: space-between;
            color: #999;
            padding: 0 0 5px;
            border-bottom: 1px solid #EFEFEF;
            font-size: 13px;
        }

        .goods-service {
            padding: 20px 0;
            font-size: 13px;
            display: flex;
            justify-content: space-between;

            .service {
                flex-shrink: 1;
                img {
                    height: 13px;
                }
            }


        }
    }


</style>