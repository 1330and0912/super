<template>
    <div class="detail-params-info">
        <table class="goods-params-size">
            <tr :key="index" v-for="(item,index) in itemParams.sizes[0]">
                <td :key="index" v-for="(arr,index) in item">
                    {{arr}}
                </td>
            </tr>
        </table>
        <table class="goods-params-info">
            <tr :key="index" v-for="(item,index) in itemParams.info">
                <td :key="index" v-for="(arr,index) in item">
                    {{arr}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DetailParamsInfo",
        props: {
            itemParams: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .detail-params-info {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 8px solid #F2F5F8;

        .goods-params-size {
            width: 100%;
            border-spacing: 0px;
            text-align: center;
            border-collapse: collapse;

            tr {
                height: 40px;

                &:nth-child(odd) {
                    background-color: rgba(10, 10, 10, .1);
                }

                td {

                    border: 1px solid rgba(10, 10, 10, .1);

                }

            }
        }

        .goods-params-info {
            margin-top: 20px;
            width: 100%;
            border-spacing: 0px;

            tr {
                height: 40px;

                td {
                    border-bottom: 1px solid rgba(10, 10, 10, .1);
                    padding-left: 30px;

                    &:nth-child(2) {
                        width: 70%;
                        color: var(--color-high-text);
                    }
                }
            }
        }

    }
</style>