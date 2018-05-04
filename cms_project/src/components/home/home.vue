<template>
	<div>
		<!-- 轮播图 -->
		<div class="swipe" v-bind:style="style">
			<mt-swipe :show-indicators="false">
			    <mt-swipe-item v-for="img in swipeImgs" :key="img.id">
			        <img :src="img.url" alt="banner" />
			    </mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- 九宫格 -->
		<div class="view-cell">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<router-link :to="{ name: 'huaban'}">
		                    <span class="mui-icon mui-icon-huaban"></span>
		                    <div class="mui-media-body">花瓣福利</div>
		            	</router-link>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        	<li class="mui-table-view-cell mui-media mui-col-xs-3">
		            	<a href="#">
		                    <span class="mui-icon mui-icon-wait"></span>
		                    <div class="mui-media-body">敬请期待</div>
		            	</a>
		        	</li>
		        </ul> 
		</div>
	</div>
</template>

<script>
	import api from '../../api/api.js';

	export default {
		data(){
			return {
				style: {
					height: '0px',
				},
				swipeImgs: [
					{id: 0, url: 'http://ww1.sinaimg.cn/large/0060lm7Tly1fo24n1nwjuj30ku0a0gtb.jpg'},
					{id: 1, url: 'http://ww1.sinaimg.cn/large/0060lm7Tly1fo24n20gatj30ku0a044u.jpg'},
					{id: 2, url: 'http://ww3.sinaimg.cn/large/0060lm7Tly1fo24n2gq8zj30ku0a0n3w.jpg'},
				],//轮播图列表
			}
		},
		created(){
			
		},
		mounted(){
			let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			this.style.height = 360 * w /750 + 'px';
			const that = this;
			window.onresize = function temp(){
				var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				that.style.height = 360 * w /750 + 'px';
			}
		}
	}
</script>

<style scoped>
	/*轮播图样式*/
	.mint-swipe img{
		width: 100%;
	}

	/*九宫格样式*/
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
		font-size: 12px;
	}
	.mui-grid-view.mui-grid-9 {
		background-color: #FFF;
		border: 0;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: 0;
		padding: 2px 15px;
	}
	/*清除字体图标*/
	.mui-table-view-cell .mui-icon:before {
		content: '';
	}
	.mui-table-view-cell .mui-icon {
		background-size: 100% 100%;
		background-repeat: round;
		width: 1em;
		height: 1em;
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
		margin-top: 0;
	}
	/*九宫格设置背景图片*/
	.mui-icon-huaban {
		background-image: url('../../static/img/huaban.png');
	}
	.mui-icon-wait {
		background-image: url('../../static/img/wait.png');
	}
</style>