### 2018-01-17

#### 复习
* vue单文件方式 xxx.vue
* 1: 准备好配置文件 package.json(包括描述文件 && 封装命令 num run dev) + webpack.config.js文件 (打包的配置文件)
* 2: 创建index.html (单页面应用的页)
* 3: 创建main.js (入口文件)
* 4: 引入vue和相关的文件 xx.vue
* 5: new Vue(options)
* 6: options(选项)
	- data
	- methods
	- components(组件内声明子组件)
	- props
* 7: 实例
	- 在组件内 (xxx.vue) 中的this
	- new Vue()
	- 事件
		+ this.$on
		+ this.$emit
		+ this.$once
		+ this.$off
* 8: 全局
	- Vue.component('组件名', 组件对象) 在哪里都可以使用
* 9: 组件传值
	- 父传子: 属性作为参数
		+ 常量 title='xx' 子组件声明接收参数 props:['xxx']
		+ 变量 :title='num' 子组件声明接收参数 props:['xxx']
	- 子传父: vuebus

#### 今日重点
* vue组件的使用
* 组件间通信
* vue-router使用
* vue-resource发起http请求
* axios

#### 过滤器
* content|过滤器，vue中没有提供相关的内置过滤器，可以自定义过滤器
* 组件内的过滤器 +  全局过滤器
	- 组件内过滤器就是options中的一个filters的属性(一个对象)
		+ 多个key就是不同过滤器名，多个value就是与key对应的过滤方式函数体
	- Vue.filter(名, fn)
* 输入的内容 字符串做一个反转
* 总结
	- 全局： 范围大，权利小
	- 组件内： 权利大，范围小

#### 获取DOM元素
 * 救命稻草，前端框架就是为了减少DOM操作，但是特定情况下，也留了后门
 * 在指定的元素上，添加ref="名称A"
 * 在获取的地方加入 this.$refs.名称A
 	- 如果ref放在了原生DOM元素上， 获取的数据就是原生DOM对象
 		+ 可以直接操作
 	- 如果ref放在了组件对象上，获取的就是组件对象
 		+ 1: 获取到DOM对象，通过this.$refs.sub.$el, 进行操作
 	- 对应的事件
 		+ created 完成了数据的初始化， 此时还未生成DOM，无法操作DOM
 		+ mounted 将数据已经转载到了DOM之上， 可以操作DOM

#### wappalyzer
* 获取到当前网站使用的技术

### 2018-01-19

#### mint-ui
* 组件库
* 饿了么出品，element-ui 在PC端使用的
* 移动端版本 mint-ui
* https://mint-ui.github.io/#!/zh-cn
* 注意：
	- 如果是全部安装的方式
		+ 1: 在template中可以直接使用组件标签
		+ 2: 在script中必须要声明,也就是要引入组件对象(按需加载)

#### vue-router
* 前端路由 核心就是锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据
* ui-router：锚点值改变，如何获取模板？ ajax
* vue中，模板数据不是通过ajax请求来，而是调用函数获取到模板内容
* 核心: 锚点值的改变
* 以后看到vue开头，就必须Vue.use
* Vue的核心插件:
	- vue-router 路由
	- vuex 管理全局共享数据
* 使用方式
	- 1: 下载 `npm i vue-router -S`
	- 2: 在main.js中引入 `import VueRouter from 'vue-router';`
	- 3: 安装插件 `Vue.use(VueRouter);`
	- 4: 创建路由对象并配置路由规则
		+ `let router = new VueRouter({ routers: [ {path: '/home', components: Home} ]})`
	- 5: 将其路由对象对递给Vue实例， options中
		+ options中加入 `router: router`
	- 6: 在app.vue中留坑 `<router-vue></router-vue>` 

### 2018-01-22

#### 命名路由
* 需求， 通过a标签点击，做页面数据的跳转
* 使用 router-link 标签
	- 1: 去哪里  `<router-link to="/beiji">去北京</router-link>`
	- 2: 去哪里  `<router-link :to="{name: 'bj'}">去北京</router-link>`
		+ 更利于维护，如果修改了path，只修改路由配置中的path， 该a标签会根据修改后的值生成href属性

#### 参数router-link
* 在vue-router中， 有两大对象被挂载到了实例this
* $route(只读，具备信息的对象)， $router(具备功能函数)
* 查询字符串
	- 1: 去哪里 `<router-link :to="{name: 'detail', query:{id: 1}}">xxx</router-link>`
	- 2: 导航 (查询字符串path不用改) `{name: 'detail', path:'/detail', 组件}`
	- 3: 去了干嘛， 获取路由参数(要注意是query还是params和对应的id名)
		+ `this.$route.query.id`
* path方式
	- 1: 去哪里 `<router-link :to="{name: 'detail', params:{id: 1}}">xxx</router-link>`
	- 2: 导航 (path方式需要在路由规则上加 /:xxx)
		+ `{name: 'detail', path:'/detail/:name', 组件}`
	- 3: 获取路由参数
		+ `this.$route.param.name`

#### 编程导航
* 不能保证用户一定会点击某些按钮
* 并且当前操作，除了路由跳转之外，还有一些别的附加操作
* this.$router.go 根据浏览器记录， 前进 1，后退 -1
* this.$router.push(直接跳转到某个页面显示)
	- push参数: 字符串 /xxx
	- 对象: `{name: 'xxx', query: {id: 1}, params: {name: 2}}`

#### 复习
* 过滤器，全局、组件内
* 获取DOM元素
	- 元素上 ref="xx" 
	- 代码中通过 this.$refs.xxx 获取其元素
		+ 原生DOM标签获取就是原生DOM对象
		+ 如果是组件标签，获取的就是组件对象，$el继续再获取DOM元素
* 声明周期时间(钩子)回调函数
	- created: 数据的初始化、DOM没有生成
	- mounted: 将数据装载到DOM元素上，此时有DOM
* 路由
	- `window.addEventListener('hashchange', fn);`
	- 根据放`<router-view></router-view>`作为一个DOM上的标识
	- 最终当锚点值改变触发hashchange的回调函数，我们将指点的模板数据插入到DOM标识上

#### 重定向和404
* 进入后，默认就是/
* 重定向 
	- `{ path:'/', redirect:'/home'}`
	- `{ path:'/', redirect:{name: 'home'}}`
* 404: 在路由规则的最后一个规则
	- 写一个很强大的匹配
	- `{ path: '*', component: NotFoundVue}`

#### 多视图
* components 多视图 是一个对象 对象内多个key和value
	- key对应视图的name属性
	- value 就是要显示的组件对象
* 多个视图 
	- `<router-vue></router-vue>` name就是default
	- `<router-vue name="header"></router-vue>` name就是header

### 2018-01-30
#### 嵌套路由
* 用单页去实现多页应用，复杂的嵌套路由
* 开发中一般会需要使用
* 视图包含视图
* 路由父子级关系路由
```javascript
	//组件内包含第一层router-view
	{ name: 'music', path:'/mucic', component: Music .
	children: [
		//子路由的path，加/是绝对路径，不加/是相对路径
		{ name: 'music_oumei', 'oumei', component: Oumei},
		{ name: 'music_japan', 'japan', cpmponent: Japan},		
	]
	} 
```

### 2018-01-31
#### vue-resource
* 可以安装插件，早期vue团队开发的插件
* 停止维护了，作者推荐使用axios
* options预检请求，是当浏览器发现跨域 + application/json的请求，就会自动发起
* 并且发起的时候携带一个content-type的头

#### axios
* https://segmentfault.com/a/1190000008470355?utm_source=tuicool&utm_medium=referral
* post请求的时候，如果数据是字符串， 默认头就是键值对， 否则就是appliction/jaon
* this.$axios.get(url, options)
* this.$axios.post(url, data, options)
* options: { params: {id: 1}}//查询字符串 header：{'content-type': 'xxx'}
* 全局默认设置: Axios.defaults.baseURL = 'xx';
* 针对当前这一次请求的相关设置

#### 如何练习
* 1: 路由核心
	- 路由基本是用
	- 任选一种路由参数的方式(查询字符串)
	- 404重定性(路由匹配规则)
	- 嵌套路由
	- 编程导航 this.$router.push()
* 2: http请求
	- axios 发起get post请求
	- axios挂载属性方式
