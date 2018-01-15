<template>
	<div>
		<button @click="call">发送消息</button>
	</div>
</template>

<script>
import connect from '../connector.js';

	export default {
		data(){
			return {

			}
		},
		methods: {
			call(){
				//发送信号
				connect.$emit('phone', 'Hello Dad')
			}
		}
	}
</script>

<style scoped>
	div {
		height: 100px;
	}
</style>