<template>
	<div>
		我是头部
		{{textone}}
		<button @click="show">从JS中获取父组件值</button>
	
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		methods: {
			show(){
				alert(this.textone);
			}
		},
		//接收父组件值参数的设置
		props: ['textone', 'texttwo']
	}
</script>

<style scoped>
	div {
		height: 50px;
		line-height: 50px;
		background-color: pink;
	}
</style>