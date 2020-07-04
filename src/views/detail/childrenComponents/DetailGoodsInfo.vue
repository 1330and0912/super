<template>
    <div class="detail-goods-info">
        <div class="goods-desc-wrap">
            <div class="start">
                <div class="square"></div>
            </div>
            <p class="goods-desc">{{detailInfo.desc}}</p>
            <div class="end">
                <div class="square"></div>
            </div>
        </div>
        <p class="key">
            {{key}}
        </p>
        <ul class="detail-img-list">
            <li v-for="item in detailImg">
                <img @load="imgLoad" :src="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props: {
            detailInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            imgLoad() {
                this.$bus.$emit('imgLoad')
            }
        },
        watch: {
            detailInfo(newVal) {
                this.detailInfo = newVal
            }
        },
        computed: {
            detailImg() {
                return this.detailInfo.detailImage && this.detailInfo.detailImage[0].list
            },
            key() {
                return this.detailInfo.detailImage && this.detailInfo.detailImage[0].key
            }
        }
    }
</script>

<style lang="less" scoped>
    #square {
        background-color: black;
        width: 5px;
        height: 5px;
    }

    .detail-goods-info {
        padding-bottom: 10px;
        border-bottom: 8px solid #F2F5F8;
        margin-top: 20px;
    }

    .goods-desc-wrap {
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        font-size: 14px;

        .goods-desc {
            padding: 15px 0;
        }

        .start, .end {
            height: 1px;
            width: 30%;
            background-color: #333;
            position: relative;
            display: flex;
            flex-direction: column;

            .square {
                position: absolute;
                top: -5px;
                #square();
            }
        }

        .end {
            align-self: flex-end;

            .square {
                align-self: flex-end;
            }
        }


    }

    .key {
        padding: 0 8px;
        margin: 10px 0;
    }

    .detail-img-list {
        img {
            width: 100%;
            vertical-align: middle;
        }
    }
</style>