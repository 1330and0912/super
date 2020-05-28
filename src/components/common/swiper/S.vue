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
        props: {}
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
</style>