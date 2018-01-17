<template>
	<div>
		<div>{{message}}</div>
		<div>
			<sub-vue></sub-vue>
		</div>
	</div>
</template>

<script>
import connector from './connect.js';
import subVue from './components/sub.vue';

connector.$on('phone', function(msg){
	console.log(msg);
});

export default {
	data(){
		return {
			message: '等待消息....'
		}
	},
	components: {
		subVue: subVue
	},
};

</script>