<template>
	<div>
		<!-- 头部内容 -->
		<mt-header title="你好，再见！"></mt-header>
		<router-view></router-view>
		<!-- 底部内容 -->
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="/">
				<span class="mui-icon icon-msnui-home-inverse"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-xinwen">
					<span class="mui-badge">5</span>
				</span>
				<span class="mui-tab-label">新闻</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon icon-sousuo"></span>
				<span class="mui-tab-label">查找</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			};
		},
	};
</script>

<style>
	
</style>