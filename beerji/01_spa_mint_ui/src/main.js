import Vue from 'vue';
import VueRouter from 'vue-router';

//引入样式
import 'mint-ui/lib/style.css';

import app  from './components/app.vue';
import Index from './components/index.vue';
import Detail from './components/detail.vue';

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{ name:'indexPath', path:'/', component: Index},
		{ name:'detailPath', path:'/detail/:id', component: Detail},
	]
});

new Vue({
	el: '#app',
	router,
	render: c => c(app),
});