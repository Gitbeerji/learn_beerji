<template>
	<div>
		<div v-bind:class="isRed?'red':'green'">单个class</div>
		<div :class="{'red': true, 'big': true}" value="isRed">多个class</div>
		<div>复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩key，取对象的value，最终返回字符串做样式名</div>

		<ul>
			<li v-for="stu in stus" :class="{'A': 'red', 'B': 'green'}[stu.score]">{{stu.name}}</li>
		</ul>
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