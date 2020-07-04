<template>
    <div class="detail-comment-info">
        <div class="comment-title">
            <span>用户评价</span>
            <span>更多 ></span>
        </div>
        <div class="user-info">
            <template v-if="rate.cRate">
                <div class="user">
                    <div class="user-avatar">
                        <img :src="rate.list[0].user.avatar" alt="">
                    </div>
                    <div class="user-name">{{rate.list[0].user.uname}}</div>
                </div>
                <div class="comment">
                    <div class="content">
                        {{rate.list[0].content}}
                    </div>
                    <div class="info-other">
                        <div class="content-date">
                            {{rate.list[0].created |dateFormat}}
                        </div>
                        <div class="content-style">
                            {{rate.list[0].style}}
                        </div>
                    </div>
                    <div v-if="rate.list[0].images" class="info-img">
                        <img v-for="(item,index) in rate.list[0].images" :src="item" alt="">
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="noComment">当前无评论信息</div>
            </template>

        </div>
    </div>
</template>

<script>
    import {dateFormat} from 'common/utils'

    export default {
        name: "DetailCommentInfo",
        props: {
            rate: Object
        },
        mounted() {
            let a = {
                name: '1',
                age: '2'
            }
            let l = Object.keys(a).length
            console.log(l);
        },
        filters: {
            dateFormat(value) {
                return dateFormat(value * 1000, 'YYYY-MM-DD')
            }
        }
    }
</script>

<style lang="less" scoped>

    // 当没有评价的时候
    .noComment {
        margin: 10px 0;
    }

    .detail-comment-info {
        border-bottom: 8px solid #F2F5F8;
        padding: 5px 12px;

        .comment-title {
            border-bottom: 1px solid #F2F5F8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            padding-right: 12px;
        }

        .user-info {
            padding-bottom: 15px;
            padding-left: 3px;

            .user {
                display: flex;
                align-items: center;
                color: #333333;

                .user-avatar {
                    padding: 10px 0;
                    width: 40px;
                    margin-right: 10px;

                    img {
                        width: 100%;
                        border-radius: 50%;
                    }
                }
            }

            .comment {
                font-size: 14px;

                .info-other {
                    display: flex;
                    margin: 10px 0;
                    font-size: 12px;
                    color: #999;

                    .content-date {
                        padding-right: 10px;
                    }

                    .content-style {
                        text-overflow: ellipsis;
                    }
                }

                .info-img {
                    img {
                        width: 70px;
                        margin-right: 5px;
                    }
                }
            }

        }
    }
</style>