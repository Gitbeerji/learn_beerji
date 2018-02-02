<template>
	<div>
		<!-- <input type="text" name="" v-model="text" /> -->
		<div>{{text}}</div>

		<button @click="changeValue">改变值</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				text: '123',
				persons: [
					{ name: 'jack'},
					{ name: 'rose'},
				],
			};
		},
		methods: {
			changeValue(){
				this.text = 'abc';
				this.persons[0].name = 'mike';
			}
		},
		created(){
			
		},
		watch: {
			//监视
			text: function(val, oldVal){
				console.log(val, oldVal);
			},
			persons: {
				handler: function(val, oldVal){
					console.log(val, oldVal);
					console.log('change');
				},
				deep: true,
			}
		}
	}
</script>

<style scoped>
	
</style>