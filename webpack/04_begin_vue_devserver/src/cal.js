var cal = {
	add: function(n1, n2){
		return n1 + n2;
	}
};

//commonjs导出
//module.exports = cal;

//es6导出
//export default  cal;


// 默认导出
var obj = '默认导出结果';
export default obj;
// 导入方式 import xxx from './cal.js';

//**
// 声明式导除出
export var obj1 = '声明式导出1';
export var obj2 = '声明式导出2';
export var obj3 = '声明式导出3';

// 导入方式
// import {obj1, obj2} from './cal.js';

// 另一种方式声明导出
var obj4 = '声明式导出4';
export {obj4};
// 导入方式
// import {obj1, obj2, obj4} from './cal.js';

//*/
 