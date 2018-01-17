//引入vue
import Vue from 'vue';

//引入app
import app from './app.vue';

new Vue({
	el: '#app',
	render: c => c(app)
});