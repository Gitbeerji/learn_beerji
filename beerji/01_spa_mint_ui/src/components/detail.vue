<template>
	<div>
		<mt-header fixed title="详情">
			<router-link :to="{name: 'indexPath'}" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="list">
			<div>这里是商品{{id}}号</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Header } from 'mint-ui';
	import { Button } from 'mint-ui';

	Vue.component(Button.name, Button);
	Vue.component(Header.name, Header);
	export default {
		data(){
			return {
				id: ''
			};
		},
		created(){
			this.id = this.$route.params.id;
		},
		mounted(){

		}
	}
</script>

<style></style>