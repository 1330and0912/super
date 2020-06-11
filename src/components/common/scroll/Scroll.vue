<template>
    <div ref="scrollWrapper">
        <div ref="rs">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import Pullup from '@better-scroll/pull-up'

    BScroll.use(Pullup)
    export default {
        name: "Scroll",
        data() {
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.initBScroll()
            this.scrolling()
            this.pullingUp()
        },
        methods: {
            //x，y:坐标
            //time: 滚动到头部花费的时间
            scrollTop(x, y, time = 200) {
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            scrolling() {
                this.scroll && this.scroll.on('scroll', position => {
                    this.$emit('scroll', position)
                })
            },
            initBScroll() {
                const el = this.$refs.scrollWrapper
                this.scroll = new BScroll(el, {
                    click: true,
                    probeType: this.probeType,
                    pullUpLoad: this.pullUpLoad
                })
            },
            pullingUp() {
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp')
                })
            },
            finishPullUp() {
                this.scroll.finishPullUp()
                console.log('加载完成');
            },
            refresh() {
                console.log('refresh');
                this.scroll.refresh && this.scroll.refresh()
            }
        }

    }
</script>

<style scoped>

</style>