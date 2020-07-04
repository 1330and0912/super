<template>
    <div class="detail-shop-info">
        <div class="shop-top">
            <h1 class="logo">
                <img :src="shop.logo" alt="">
            </h1>
            <div class="shop-name">{{shop.name}}</div>
        </div>
        <div class="shop-middle">
            <div class="shop-middle-left">
                <div class="sells">
                    <strong>{{shop.sells | sellsFilter}} </strong>
                    <p>总销量</p>
                </div>
                <div class="goods-count">
                    <strong>{{shop.goodsCount}}</strong>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="shop-middle-right">
                <table>
                    <tr v-for="item in shop.score">
                        <td>{{item.name}}</td>
                        <td :class="item.isBetter?'better-color':'no-better-color'">{{item.score}}</td>
                        <td :class="item.isBetter?'better':'no-better'" v-text="item.isBetter?'高':'低'"></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-footer">
            <div class="enter-shop">
                <button>
                    进店逛逛
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props: {
            shop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            sellsFilter(value) {
                return value > 10000 ? `${(value / 10000).toFixed(1)}万` : value
            }
        },
        computed: {
            isBetter() {
                return
            }
        }
    }
</script>

<style lang="less" scoped>
    @color: #E5E5E5;
    @border-color: #F2F5F8;
    .better {
        color: #ffffff;
        background-color: #5EA732;
    }

    .no-better {
        color: #ffffff;
        background-color: #F13E3A;
    }

    .better-color {
        color: #5EA732;
    }

    .no-better-color {
        color: #F13E3A;
    }

    .detail-shop-info {
        padding: 25px 8px;
        border-bottom: 8px solid @border-color;

        .shop-top {
            display: flex;
            align-items: center;

            .logo {
                height: 45px;
                width: 45px;
                margin: 0;

                img {
                    border-radius: 50%;
                    border: 1px solid @color;
                    height: 100%;
                }

            }

            .shop-name {
                margin-left: 10px;
                color: #666;
            }
        }

        .shop-middle {
            margin-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .shop-middle-left {
                flex: 1;
                display: flex;
                border-right: 1px solid @color;
                justify-content: space-around;

                .goods-count, .sells {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }

                strong {
                    font-weight: normal;
                    font-size: 18px;
                }

                p {
                    margin-top: 10px;
                    font-size: 12px;
                }
            }

            .shop-middle-right {
                flex: 1;
                text-align: left;

                table {
                    border-spacing: 10px;
                    font-size: 13px;
                    float: right;

                    tr {
                        td {
                            padding: 2px;
                        }
                    }
                }

            }
        }

        .shop-footer {
            display: flex;
            justify-content: center;
            align-items: center;

            .enter-shop button {
                padding:6px 40px;
                border-radius: 10px;
                background-color: @border-color;
                border: none;
            }
        }

    }

</style>