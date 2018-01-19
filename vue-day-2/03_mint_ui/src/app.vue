<template>
	<div>
		<mt-header title="多个按钮">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button @click="handleClose">关闭</mt-button>
		</mt-header>

		<mt-switch v-model="value"></mt-switch>

		<button @click="show">显示弹出框</button>
		<mt-swipe :auto="4000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
			<mt-swipe-item>4</mt-swipe-item>
		</mt-swipe>	
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';

	export default {
		data(){
			return {
				text: '123',
				value: true
			};
		},
		methods: {
			handleClose(){},
			show(){
				Toast('Hello');
			},
		},
		
	};
</script>

<style>
	body{
		padding: 0;
		margin: 0;
	}
</style>