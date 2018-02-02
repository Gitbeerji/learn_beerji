import Vue from 'vue';
//主体
import app from './components/app.vue';

//new Vue 启动
new Vue({
	el: '#app',
	render: c => c(app),
});