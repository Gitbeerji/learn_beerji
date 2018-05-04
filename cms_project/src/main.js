'use strict';

//引入第三方包开始
import Vue from 'vue';
//vue-router:引入路由对象
import VueRouter  from 'vue-router';
//vue-router:安装插件
Vue.use(VueRouter);

//Mint: 引入mint-ui
import Mint from 'mint-ui';
//Mint: 引入css
import 'mint-ui/lib/style.css';
//Mint: 安装插件
Vue.use(Mint);
//MUI: 引入mui的样式
import './static/vendor/mui/css/mui.css';
//引入全局样式
import './static/css/global.css';

//Axios: 引入axios
import Axios from 'axios';
//默认配置
Axios.defaults.baseURL = 'https://route.showapi.com/';
//挂载原型
Vue.prototype.$axios = Axios;
//引入第三方包结束


//引入自己的vue文件 开始
import App from './app.vue';
import Home from './components/home/home.vue';
import Huaban from './components/huaban/huaban.vue';
import Page404 from './components/404/404.vue';
//引入自己的vue文件 结尾


//创建路由对象，并配置路由规则
let router = new VueRouter({
	routes: [
		{ path: '/', redirect: { name: 'home'}}, //重定向
		{ name: 'home', path: '/home', component: Home},
		{ name: 'huaban', path: '/huaban', component: Huaban},
		{ path: '/*', component: Page404},
	]
});

new Vue({
	el: '#app',
	router,
	render: c=>c(App),
});