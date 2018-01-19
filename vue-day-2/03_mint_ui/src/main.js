//引入vue
import Vue from 'vue';

//引入app
import app from './app.vue';

//引入mint-ui
import Mintui from 'mint-ui';
//引入样式
import 'mint-ui/lib/style.css';


//安装插件
Vue.use(Mintui);

//use的实际操作
//1: 组件库， 在内部注册了各种全局组件
//2: 插件，挂载属性，为了方便this，可以使用到其功能
new Vue({
	el: '#app',
	render: c => c(app)
});