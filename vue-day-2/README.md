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