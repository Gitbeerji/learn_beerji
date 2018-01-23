import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './components/app.vue';
//路由切换页面
import Music from './components/music.vue';
import Movie from './components/movie.vue';

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
	//routes
	routes: [
		{name: 'musicPath', path: '/mymusic', component: Music},
		{name: 'moviePath', path: '/movie', component: Movie}
	],
});

//new Vue 启动
new Vue({
	el: '#app',
	//让vue知道我们的路由规则
	router, //可以简写成router
	render: c => c(app)
});