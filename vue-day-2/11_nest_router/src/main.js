import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './components/app.vue';
//路由切换页面
import Header from './components/header.vue';
import Footer from './components/footer.vue';

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
	//routes
	routes: [
		{ path:'', redirect: {name: 'music'}},
		{ name: 'music', path: '/music', children: [
			{}
		]},
	],
});

//注册全局顶部组件
Vue.component('HeaderVue', Header);
//注册全局底部组件
Vue.component('FooterVue', Footer);

//new Vue 启动
new Vue({
	el: '#app',
	//让vue知道我们的路由规则
	router, //可以简写成router
	render: c => c(app)
});