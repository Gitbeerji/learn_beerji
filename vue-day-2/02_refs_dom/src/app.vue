<template>
	<div>
		<sub-vue ref="sub"></sub-vue>

		<div ref="myDiv">{{text}}</div>
	</div>
</template>

<script>
	import subVue from './sub.vue';

	export default {
		data(){
			return {
				text: '123'
			};
		},
		components: {
			subVue: subVue
		},
		//组件创建后， 数据已经完成初始化， 但是DOM还未生成
		created(){	//事件的处理函数(created)
			//获取不到
			console.log('created：', this.$refs.myDiv);
		},
		//数据装载后， 各种数据已经就位，将数据渲染到DOM上，DOM已经生成
		mounted(){
			console.log('mounted：', this.$refs.myDiv);
			//涉及DOM类的操作
			//this.$refs.myDiv.innerHTML = 'Hello';
			//只涉及数据的操作
			this.text = 'HELLO';

			//console.log('sub:', this.$refs.sub.$el);
			//获取组件对象，并获取到其DOM对象
			this.$refs.sub.$el.innerHTML = 'FUCK';
		}
	}
</script>