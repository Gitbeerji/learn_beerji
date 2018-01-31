import Vue from 'vue';
//主体
import app from './components/app.vue';

import Axios from 'axios';

//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;

//new Vue 启动
new Vue({
	el: '#app',
	render: c => c(app),
});