### 2018-01-31
#### 复习
* 路由操作的基本步骤
```javascript
	//引入对象
	import VueRouter from 'vue-router';
	//安装插件
	Vue.use(VueRouter); //挂载属性的行为
	//创建路由对象
	let router = new VueRouter({
		routes: [
			{ name: 'xxx', path: '/xxx', component: 组件}
		]
	});
	//将路由对象放入到options中new Vue()
	new Vue({
		router
	})
```
* 套路
	- 1: 去哪里 `<router-link :to="{name: 'bj'}"></router-link>`
	- 2: 导航(配置路由规则) `{ name: 'bj', path: '/beijing', 组件}` 
	- 3: 做什么(在组件A内干什么)
		+ 在created事件函数中，获取参数
		+ 发起请求，把数据挂载上去
* 参数
	- 查询字符串(#/querystring?id=1&age=2)
		+ 1: `<router-link :to"{name: 'bj', query:{id: 1, age:2}}"></router-link>`
		+ 2: `{ name: 'bj', path: '/beijing', 组件}` 
		+ 3: `this.$route.query.id||age`
	- path(#/beijing/1/2)
		+ 1: `<router-link :to"{name: 'bj', params:{id: 1, age:2}}"></router-link>`
		+ 2: `{name: 'bj', path:'/beijing/:id/:age', 组件}`
		+ 3: `this.$route.param.id||age`
* 编程式导航
	- 一个获取信息的只读对象($route)
	- 一个具备功能函数的对象($router)
	- 根据浏览器历史记录前进和后退 `this.$router.go(1|-1)`
	- 跳转到指定路由 `this.$router.push({name: 'bj'})`
* 嵌套路由
	- 让变化的视图(router-view)产生包含关系(router-view)
	- 让路由与router-view关联，并且也产生父子关系
* 多视图
	- 让视图更为灵活，以前一个一个放，现在可以放多个，通过配置可以去修改
* axios
	- 开始
		+ 跨域
		+ 默认的头因为数据是对象，所以content-type:application/json
		+ 有 OPTIONS 预检请求(浏览器自动发起)
	- 最终
		+ 当我们调整为字符串数据，引起content-type变为了www键值对
		+ 没有那个OPTIONS预检请求
	- 总结： 跨域
		+ application.json 会引起OPTIONS预检请求，并且自定义一个头(提示服务器，这次的content-type较为特殊)content-type的值
		+ 服务器认为这个是一次请求，而没有允许content-type的头
		+ 浏览器就认为服务器不一定能处理掉这个特殊的头的数据
		+ 抛出异常
		+ response.setHeader("Access-Control-Allow-Header","content-type[,...]")
		+ formdata的样子: key=value&key=value
* axios属性关系
	- options: headers, baseURL, params
	- 默认全局设置
		+ Axios.defaults -> options对象
	- 针对个别请求来独家options
	- axios.get(url, options)
	- axios.post(url, data, options)

#### axios
* 合并请求
* axios.all([请求1, 请求2])
* 分发响应 axios.spread(fn)
* fn: 对象参数(res)和请求的顺数一致
* 应用场景:
	- 必须保证两次请求都成功，比如，分头获取省市的数据
* 执行特点: 只要有一次失败就算失败，否则成功

#### 拦截器
* 过滤，在一起请求与响应中，做一些行为
* axios.interceptors.request.use(fn) 在请求之前
* function(config){ config.header= 'xxx'} config相当于options对象
* 默认设置 defaults
* 单个请求的设置options get(url,options)
* 拦截器

#### token(拓展)
* cookie 和 session 的机制， cookie自动带一个字符串
* cookie只在浏览器
* 移动端原生应用，也可以使用http协议，可以加自定义的头，原生应用没有cookie
* 对于三端来讲，token可以作为类似cookie的使用，并且可以通用
* 拦截器可以用在添加token上

#### 拦截器操作loading图标