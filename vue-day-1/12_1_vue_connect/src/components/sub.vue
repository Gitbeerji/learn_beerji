<template>
	<div><button @click="send">发送消息</button></div>
</template>

<script>
import connector from '../connect.js';

	export default {
		data(){
			return {};
		},
		methods: {
			send(){
				connector.$emit('phone', '在？能问你个事吗？');
			}
		}
	}
</script>