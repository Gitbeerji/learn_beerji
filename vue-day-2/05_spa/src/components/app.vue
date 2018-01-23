<template>
	<div>
		<div class="head">头部
			<!-- <a href="#/music">音乐</a>
			<a href="#/movie">电影</a>
			<a href="#/music">音乐1</a>
			<a href="#/movie">电影1</a>
			<a href="#/music">音乐2</a>
			<a href="#/movie">电影2</a>
			<a href="#/music">音乐3</a>
			<a href="#/movie">电影3</a> -->
			<router-link :to="{name: 'musicPath'}">音乐1</router-link>
			<router-link :to="{name: 'musicPath'}">音乐2</router-link>
			<router-link :to="{name: 'musicPath'}">音乐3</router-link>

			<router-link :to="{name: 'moviePath'}">电影1</router-link>
			<router-link :to="{name: 'moviePath'}">电影2</router-link>
			<router-link :to="{name: 'moviePath'}">电影3</router-link>

			<!-- 也可以跟路径使用 -->
			<router-link to="/movie">电影</router-link>
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
		height: 100px;
		background-color: pink;
	}

	.footer {
		height: 100px;
		background-color: #CCC;
	}
</style>