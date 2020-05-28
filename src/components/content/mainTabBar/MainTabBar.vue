<template>
	<TabBar>
		<TabBar>
			<tab-bar-item activeColor="deeppink" path="/home">
				<img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item activeColor="deeppink" path="/category">
				<img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item activeColor="deeppink" path="/cart">
				<img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item activeColor="deeppink" path="/profile">
				<img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</TabBar>
	</TabBar>
</template> 

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		components: {
			TabBar,
			TabBarItem,
		}
	}
</script>

<style>
</style>
