<template>
	<div>
		<div>单价<input type="text" v-model="price"/></div>
		<div>件数<input type="text" v-model="num"/></div>
		<div>折扣<input type="text" v-model="rate"/></div>
		<div>{{sum.name}} {{sum.price}}</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				price: 0,
				num: 1,
				rate: 5,
			};
		},
		methods: {
			changeValue(){
				
			}
		},
		created(){
			
		},
		computed: {
			sum(){
				//如果当函数内涉及的this，相关属性发生改变以后触发，并返回一个值(可以是对象)
				//return this.price * this.num * (this.rate / 10)
				return {
					name: 'xxx',
					price: this.price * this.num
				};
			}
		}
	}
</script>

<style scoped>
	
</style>