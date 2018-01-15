<template>
	<div>
		<subVue></subVue>

		<div>
			<button @click="listen">监听电话</button>
		</div>
	</div>
</template>

<script>
//引入连接器
import connect from './connector.js';
	export default {
		data(){
			return {
				text2: 'hehehahaha'
			}
		},
		methods: {
			listen(){
				connect.$on('phone', function(msg){
					console.log(msg)
				});
			}
		},
	}
</script>

<style>
	
</style>