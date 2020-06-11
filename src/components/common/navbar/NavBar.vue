<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style scoped="scoped">
    .nav-bar {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
        background-color: var(--color-tint);
        display: flex;
        height: 44px;
        line-height: 44px;
        color: #fff;
        box-shadow: 0 1px 11px rgba(100,100,100,.2);
    }
    .left, .right {
        width: 60px;
    }
    .center {
        flex: 1;
        text-align: center;
    }

</style>
