import Vue from 'vue';
//主体
import app from './components/app.vue';

import Axios from 'axios';

//export default 整个对象
import Mint from 'mint-ui';
//import { Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css';
//安装插件， 注册一堆全局组件
Vue.use(Mint);

Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

//默认设置
Axios.defaults.headers = {
	accept: 'defaults'
};

//拦截器
//拦截器对每一次请求都有效
Axios.interceptors.request.use(function(config){
	//请求发起之前 显示loading
	Mint.Indicator.open();
	return config;
});

Axios.interceptors.response.use(function(data){
	//响应回来之后，隐藏loading
	Mint.Indicator.close();
	console.log(data);
	return data;
});

//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;

//new Vue 启动
new Vue({
	el: '#app',
	render: c => c(app),
});