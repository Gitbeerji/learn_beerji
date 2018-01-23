<template>
	<div>
		<div>详情</div>
		<button @click="goBack">向上一级</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			};
		},
		methods: {
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>