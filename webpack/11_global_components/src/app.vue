<template>
	<div>
		<header-vue textone="大"></header-vue>
		<body-vue v-bind:texttwo="text2"></body-vue>
		<footer-vue></footer-vue>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				text2: 'hehehahaha'
			}
		},
		methods: {},
	}
</script>

<style>
	
</style>