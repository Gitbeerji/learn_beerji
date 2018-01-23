<template>
	<div>
		<mt-header fixed title="首页"></mt-header>
		<div class="list">
			<ul>
				<li v-for="(pro, index) in list" :key="index" @click="goDetail(pro.id)">
					<div class="item">
						<img :src="pro.src" alt="" />
						<div>{{pro.name}} {{pro.id}}号</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Header } from 'mint-ui';

	Vue.component(Header.name, Header);
	export default {
		data(){
			return {
				list: [
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 1},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 2},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 3},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 4},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 5},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 6},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 7},
					{name:'熊吉', src:'http://ww3.sinaimg.cn/large/0060lm7Tly1fnqdpmehjej303y03ct8p.jpg', id: 8},
				]
			}
		},
		methods: {
			goDetail(id){
				this.$router.push({
					name: 'detailPath',
					params: {
						id: id
					}
				})
			}
		}
	}	
</script>

<style scoped="">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.list li {
		overflow: hidden;
		padding: 5px 0;
		border-bottom: 1px solid #CCC;
	}

	.item img{
		float: left;
		width: 40px;
		height: 40px;
	}
	.item div {
		padding-left: 50px;
		height: 40px;
		line-height: 40px;
	}
</style>