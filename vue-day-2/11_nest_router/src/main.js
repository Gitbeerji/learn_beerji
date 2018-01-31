import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './components/app.vue';

//全局组件
import Header from './components/header.vue';
import Footer from './components/footer.vue';
//路由切换页面
import Film from './components/film.vue';
import Music from './components/music.vue';

//二级页面
import Japan from './components/japan.vue';
import Oumei from './components/oumei.vue';

//注册全局组件
Vue.component('headerVue', Header);
Vue.component('footerVue', Footer);

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
	//routes
	routes: [
		{ path:'/', redirect: {name: 'film'}},
		{ name: 'film', path: '/film', component: Film, children: [
			//这里很灵活， 如果写上/xxx 就是绝对路径 /oumei
			//如果写上oumei 就是/film/oumei 相对路径
			{ path:'', component: Japan},
			{ name: 'film_oumei', path: 'oumei', component: Oumei },
			{ name: 'film_japan', path: 'japan', component: Japan }
		], },
		{ name: 'music', path: '/music', component: Music},
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