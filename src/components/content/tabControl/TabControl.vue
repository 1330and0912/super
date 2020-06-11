<template>
    <div class="tab-control">
        <div @touchmove="itemMove"
             @touchend="itemTouch(index)"
             @click="tabClick(index)"
             class="tab-control-item"
             :class="{active:currentIndex === index}" :key="index"
             v-for="(item,index) in title">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            title: {
                type: Array,
                default: () => Array
            }
        },
        data() {
            return {
                currentIndex: 0,
                move: true //判断是否在移动，防止误触
            }
        },
        methods: {
            itemTouch(index) {
                if (this.move) {
                    this.currentIndex = index
                }
                this.move = true
            },
            itemMove() {
                this.move = false
            },
            tabClick(index) {
                this.$emit('tab-click',index)
            },

        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background-color: #fff;

    }

    .tab-control-item {
        flex: 1;

    }

    .tab-control-item span {
        padding: 5px 10px;
    }

    .active {
        color: var(--color-high-text);
    }

    .active span {
        border-bottom: 3px solid var(--color-high-text);

    }
</style>