<template>
	<div>
		<div class="head">头部
			<!-- <router-link :to="{name: 'listPath'}">x</router-link> -->
		</div>
		<!-- 留坑 -->
		<router-view class="b"></router-view>
		<button @click="goList">跳转至列表</button>
		<button @click="testParams">测试编程导航传递参数</button>
		<div class="footer">底部</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		methods: {
			goList(){
				this.$router.push('/list');
			},
			testParams(){
				//查询字符串方式 /music?id=1$name=2
				this.$router.push({
					name: 'listPath',
					query: {
						id: 1,
						name: 2
					}
				})
			}
		}
	}
</script>

<style scoped>
	.head {
		height: 100px;
		background-color: yellowgreen;
	}
	
	.b {
		height: 100px;
		background-color: pink;
	}

	.footer {
		height: 100px;
		background-color: #CCC;
	}
</style>