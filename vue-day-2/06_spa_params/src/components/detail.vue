<template>
	<div>
		<div>详情</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			};
		},
		created(){ //DOM还未生成
			//获取路由参数
			//vue-router中挂载两个对象的属性
			//$route (信息数据) $router (功能函数)
			console.log(this.$route.query);
			console.log(this.$route.params);
		},
		mounted(){	//已经将数据装在到页面上， DOM已经生成

		}
	}
</script>