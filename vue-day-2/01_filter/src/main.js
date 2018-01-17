//引入vue
import Vue from 'vue';

//引入app
import app from './app.vue';

//创建全局过滤器
Vue.filter('myFilter', function(value){
	return '我是全局过滤器';
});

new Vue({
	el: '#app',
	render: c => c(app)
});