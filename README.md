# learn_beerji
### 2018-01-05 webpack vue学习

#### webpack-ES6的处理
* ES6的模块，vue本身默认支持ES6的模块导入导出
* babel
	- babel-loader(内部依赖babel-core)
		+ 关键字( presets es2015)
		+ 函数( plugins babel-plugin-transform-runtime)

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