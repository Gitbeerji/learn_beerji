<template>
	<div>
		<ul>
			<div>使用数组</div>
			<li v-for="(stu, index) in stus" v-bind:key="index">
				index{{index}},stu:{{stu}}
			</li>

			<div>使用对象</div>
			<li v-for="(value, key, index) in person" v-bind:key="key">
				value: {{value}} ,
				key: {{key}} ,
				index: {{index}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				stus: [
					{name: 'jack', score: 'A'},
					{name: 'rose', score: 'B'}
				],
				person: {
					name: 'mick',
					alise: '麦克'
				}
			}
		}
	}
</script>