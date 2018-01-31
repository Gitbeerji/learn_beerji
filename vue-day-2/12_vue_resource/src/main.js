import Vue from 'vue';
//主体
import app from './components/app.vue';

import VueResource from 'vue-resource';

//安装插件
Vue.use(VueResource);
//以后通过this.$http
// Vue 是所有实例对象的构造函数
// Vue.prototype.$http  实例(this)就可以.$http

//new Vue 启动
new Vue({
	el: '#app',
	render: c => c(app),
});