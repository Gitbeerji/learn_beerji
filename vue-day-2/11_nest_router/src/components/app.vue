<template>
	<div>
		<header-vue></header-vue>	
		<!-- 留坑 -->
		<div class="main">
			<router-view></router-view>
		</div>
		<footer-vue></footer-vue>
	</div>
</template>

<script>
	
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	.main {
		border: solid 1px #ccc;
		padding: 5px;
	}
</style>