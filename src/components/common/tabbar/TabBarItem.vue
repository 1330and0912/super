<template>
    <div :style="activeStyle" :path="path" class="tab-bar-item" @touchmove="touchMove" @touchend="touchEnd">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div>
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            //页面跳转路径
            path: String,
            //活跃的链接文字颜色默认红色
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                //判断是否误触
                isMove: true
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            touchEnd() {
                if(this.isMove) {
                    this.$router.replace(this.path).catch(err => err)
                }
                this.isMove = true
            },
            touchMove(e) {
                // this.a = 10;
                // console.log( this.isMove);
                this.isMove = false
                // console.log(this);
            }
        },
        // beforeCreate() {
        //     console.log(document.querySelector('.tab-bar-item'));
        //     console.log(this.touchEnd);
        //     console.log(this.isMove);
        //     console.log(this.isActive);
        //
        // },
        // created() {
        //     console.log(document.querySelector('.tab-bar-item'));
        //     console.log(this.touchEnd);
        //     console.log(this.isMove);
        //     console.log(this.isActive);
        //
        // },
        // beforeMount() {
        //     console.log(document.querySelector('.tab-bar-item'));
        //     console.log(this.touchEnd);
        //     console.log(this.isMove);
        //     console.log(this.isActive);
        //
        // }

    }
</script>

<style scoped="scoped">
    .tab-bar-item {
        height: 49px;
        text-align: center;
        flex: 1;
    }

    img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 3px;
    }

    div {
        font-size: 14px;
    }
</style>
