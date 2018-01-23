<template>
	<div>
		<div>列表</div>
		<ul>

			<li v-for="(hero, index) in heros" :key="index">
				{{hero.name}}
				<router-link :to="{name: 'detailPath', params: {id: hero.id}}">查看英雄信息</router-link>
			</li>

			<button @click="goDetail">跳转至详情</button>
			<button @click="goBack">向上一级</button>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				heros: [
					{name: '李白', id: '9527'},
					{name: '王昭君', id: '89757'}
				]
			};
		},
		methods: {
			goDetail(){
				this.$router.push({
					name: 'detailPath'
				})
			},
			goBack(){
				this.$router.go(-1);  //-1代表上一次记录
			}
		}
	}
</script>