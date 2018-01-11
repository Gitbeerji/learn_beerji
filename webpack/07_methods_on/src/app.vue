<template>
	<div>
		<div v-bind:class="isRed?'red':'green'">单个class</div>
		<div :class="{'red': true, 'big': true}" value="isRed">多个class</div>
		<div>复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩key，取对象的value，最终返回字符串做样式名</div>

		<ul>
			<li v-for="stu in stus" :class="{'A': 'red', 'B': 'green'}[stu.score]">{{stu.name}}</li>
		</ul>

		<!-- <button v-on:click="isRed = !isRed">点我大变化</button> -->
		<button @click="change(this)">点我大变化</button>
	</div>
</template>

<script>
// class 取一个返回一个字符串 取多个返回一个对象

//一个学生列表 每个人都有成绩AB，根据当前学生的成绩匹配显示不同的颜色
//A-red B-green
	export default {
		data() {
			return {
				isRed: false,
				stus: [
					{name: 'jack', score: 'A'},
					{name: 'rose', score: 'B'}
				]
			}
		},
		//声明函数，属于组件对象的
		methods: {
			//里面包含多个函数名做key， 函数体做vaule
			change(i){
				console.log(i);
				//在script中能使用的对象，基本template中也能用
				//在script中加this， template中不需要this
				this.isRed = !this.isRed;
				this.stus.push({name: 'Robin', score: 'A'});
			}
		}
	}
</script>

<style>
	.red {
		background-color: red;
	}
	.green {
		background-color: green;
	}
	.big {
		height: 50px;
	}
</style>