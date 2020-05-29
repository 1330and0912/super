<template>
    <div id="hy-swiper">
        <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <div class="indicator">
            <slot name="indicator" v-if="slideCount>1 && showIndicator">
                <div :key="index" v-for="(item,index) in slideCount" class="indi-item"
                     :class="{active: index === currentIndex}">
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "S",
        props: {
            //轮播间隔，默认3秒轮播一次
            interval: {
                type: Number,
                default: 3000
            },
            //动画时间，300毫秒内完成一次轮播
            animDuration: {
                type: Number,
                default: 300
            },
            //默认滑动百分之25的距离后可以跳到下一张
            moveRatio: {
                type: Number,
                default: 0.25
            },
            //是否显示圆圈按钮
            showIndicator: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                slideCount:0, //sliders数量
            }
        }
    }
</script>

<style scoped>
    #hy-swiper {
        position: relative;
        overflow: hidden;
    }

    .swiper {
        display: flex;
    }
    .indicator {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 8px;
    }

    .indi-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }

    .indi-item.active {
        background-color: rgba(212, 62, 46, 1.0);
    }
</style>