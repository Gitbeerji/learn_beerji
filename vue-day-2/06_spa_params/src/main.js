import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './components/app.vue';
//路由切换页面
import List from './components/list.vue';
import Detail from './components/detail.vue';

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
	//routes
	routes: [
		{name: 'listPath', path: '/list', component: List},
		//以下规则匹配 /detail?xxx=xxx&xxx=xxx 多少个查询字符串都不影响
		{name: 'detailPath', path: '/detail/:id', component: Detail}
	],
});

//new Vue 启动
new Vue({
	el: '#app',
	//让vue知道我们的路由规则
	router, //可以简写成router
	render: c => c(app)
});