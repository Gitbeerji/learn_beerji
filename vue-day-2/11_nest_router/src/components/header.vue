<template>
	<div>
		<div class="header">
			<!-- <a href="">电影</a>
			<a href="">音乐</a> -->
			<router-link :to="{name: 'film_japan'}">在线电影</router-link>
			<router-link :to="{name: 'music'}">在线音乐</router-link>

		</div>
		<hr />
	</div>
</template>

<style scoped>
	.header {
		padding: 2px;
	}
	.header a {
		display: inline-block;
		text-decoration: none;
		background: #97D0EC;
		color: #FFF;
		padding: 4px 8px;
		border-radius: 4px;
	}
</style>