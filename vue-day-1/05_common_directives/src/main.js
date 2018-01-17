//1 引入vue
import Vue from 'Vue';
//2 引入app.vue 用它的内容来替换 div id=app
import App from './app.vue';
//3 构建vue实例

new Vue({
	//渲染内容的目的地
	el: '#app',
	//渲染内容
	render: function (c){
		return c(App);
	}
});