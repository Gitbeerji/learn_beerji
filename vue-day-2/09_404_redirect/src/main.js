import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './app.vue';

import NotFound from './notfound.vue';
import Home from './home.vue';

Vue.use(VueRouter);

let router = new VueRouter();

router.addRoutes([
	{path: '/', redirect: {name: 'homePath'}},
	{name: 'homePath', path:'/home', component: Home},
	{path: '*', component: NotFound},
]);

new Vue({
	el: '#app',
	router,
	render: c => c(app),
});