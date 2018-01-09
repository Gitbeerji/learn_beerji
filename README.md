# learn_beerji
### 2018-01-05 webpack vue学习

#### webpack-ES6的处理
* ES6的模块，vue本身默认支持ES6的模块导入导出
* babel
	- babel-loader(内部依赖babel-core)
		+ 关键字( presets es2015)
		+ 函数( plugins babel-plugin-transform-runtime)

### 2018-01-08

#### ES6中的模块
* 默认
	- 导入 `import [,..xxx] [,..from] './xxx.ext'`
	- 导出 `export default obj;`

* 声明式
	- 1导出 `export var obj = xxx;`
	- 2导出 `export var obj2 = {};`
	- 3单独导出 `export {stu};`
	- 导入 `import {obj, obj2, stu} from './xxx.js'`,直接使用obj
* 全体
* 默认导出和声明式导出在使用上的区别
	- 要注意，声明式导入的时候，必须{名称} 名称要一致(按需导入)
	- 默认导入，可以随意的使用变量名

```javascript
	
	{
		default:"默认导出结果",
			// import xx from './cal.js' 会获取到整个对象的default属性
		obj1:"声明式导出1",
		obj2:"声明式导出2",
		obj3:"声明式导出3",
		obj4:"声明式导出4"
	}

			// import * as allObj from './cal.js' 获取的就是一整个对象

```

* import 和 export 一定要写在顶级， 不要包含在 {}内

#### ES6中代码变化
* 对象属性的声明

```javascript 
	var name = 'abc';
	var person = { name }; //简写 -> var person = {name: name};

	//声明函数
	var cal = {
		add: function(){
			return 1;
		},
		add2(){
			return 2;
		},
		add3: function (n1, n2){
			return n1 + n2;
		},
		add4(n1, n2){	//省略function
			return n1 + n2;
		}
	}
```

* 当属性的key和变量的名相同，而要使用变量的值做value
* 就可以简写 {name} -> {name: name}
* es6中函数声明
	- 省略了 :function

### 2018-01-09

#### vue单文件方式
* 单文件就是以 *.vue结尾的文件，最终通过webpack也会编译成*.js在浏览器运行
* 内容： <template></template> + <script></script> + <style></style>
	- 1: template中只能有一个根节点 2.X
	- 2: script中 按照 export default {配置} 来写
	- 3: style中 可以设置scoped属性，让其只在 template中生效

#### 以单文件的方式启动
* webpack找人来理解单文件代码
	- vue-loader, vue-template-complier 代码中依赖 vue
