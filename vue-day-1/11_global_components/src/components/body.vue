<template>
	<div>
		我是身体
		{{texttwo}}
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		//接收父组件值参数的设置
		props: ['texttwo']
	}
</script>

<style scoped>
	div {
		height: 50px;
		line-height: 50px;
		background-color: green;
	}
</style>