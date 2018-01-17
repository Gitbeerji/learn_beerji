<template>
	<div>
		<div>请输入内容</div>
		<div><input type="text" v-model="text"/></div>
		<div>显示： {{text | myFilter}}</div>
		<!-- 测试组件的范围 -->
		<div>
			<sub-vue></sub-vue>
		</div>
	</div>
</template>

<script>
import subVue from './sub.vue';

	export default {
		filters: {
			myFilter: function(value){ //value -> text
				//字符串反转
				//转换成数组，反转数组，转换成字符串
				return value.split('').reverse().join('');
			}
		},
		data(){
			return {
				text: ''
			};
		},
		components: {
			subVue: subVue
		}
	}
</script>