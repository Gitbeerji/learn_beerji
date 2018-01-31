<template>
	<div>
		<div>电影下载</div>
		<div>
			<!-- <a href="">日韩</a>
			<a href="">欧美</a> -->
			<router-link :to="{ name: 'film_japan'}">日韩电影</router-link>
			<router-link :to="{ name: 'film_oumei'}">欧美电影</router-link>
		</div>
		<hr />
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			};
		}
	}
</script>

<style scoped>
	.content {
		border: solid 1px #CCC;
		padding: 5px;
	}
</style>