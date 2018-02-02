<template>
	<div>
		<div class="main">
			<div class="item" v-for="(item, index) in data" :key="index">
				<div><img :src="item.thumb" alt="" /></div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../../api/api.js';

	export default {
		data(){
			return {
				data: [],
			};
		},
		created(){
			this.$axios.get(api.huaban, {
				params:{
					type: 34,
					num: 20,
					page: 1
				}
			}).then(res=>{
				this.data = res.data.showapi_res_body;
			}).catch(err=>{

			})
		}
	}
</script>

<style scoped>

	.item {
		margin-bottom: 5px;
	}
	.item > div {
		padding: 4px;
		border: solid 1px #CCC;
	}
	.item img {
		width: 100%;
	}
</style>