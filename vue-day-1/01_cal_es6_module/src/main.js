//引入cal对象
//var cal = require('./cal.js');

//es6的模块引入
//import cal from './cal.js';

//获取按钮
/*
document.getElementById('btn').onclick = function (){
	var n1 = document.getElementById('n1').value - 0;
	var n2 = document.getElementById('n2').value - 0;
	var sum = cal.add(n1, n2);
	document.getElementById('result').value = sum;
};
*/

/*
import defaultObj from './cal.js';
console.log(defaultObj);
*/

/**

function test() {	//不能包含在函数背部，只能在最外层作用域 import 和 export
	import {obj1, obj2, obj4} from './cal.js';

	console.log(obj1, obj2, obj4);
}

test();
*/


//全体导入
import * as obj from './cal.js';
console.log(obj);