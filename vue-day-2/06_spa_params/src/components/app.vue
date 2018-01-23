<template>
	<div>
		<div class="head">头部
			<!-- <router-link :to="{name: 'listPath'}">x</router-link> -->
		</div>
		<!-- 留坑 -->
		<router-view class="b"></router-view>
		<div class="footer">底部</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.head {
		height: 100px;
		background-color: yellowgreen;
	}
	
	.b {
		background-color: pink;
	}

	.footer {
		height: 100px;
		background-color: #CCC;
	}
</style>