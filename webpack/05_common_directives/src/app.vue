<template>
	<!-- 只能有一个根节点 -->
	<div>
		<pre>
			* v-text 是元素的 innerText 只能在双标签中使用
			* v-html 是元素的 innerHtml 不能包含<!-- {{xxx}} -->
			* v-if 元素是否移除或插入
			* v-show 元素是否显示或隐藏
			* v-model 双向数据绑定 v-bind是单项数据绑定(内存js改变影响页面)
		</pre>

		v-text： <br />
		<span v-text="text"></span>
		<input type="text" v-text="text"/>
		<hr />

		v-html： <br />
		<span v-html="html"></span>

		<hr />
		v-if：<br />
		<div v-if="isShow" style="height: 50px; background: red;"></div>

		<hr />
		v-show：<br />
		<div v-show="isShow" style="height: 50px; background: green;"></div>

		<hr />
		v-model：<br />
		<input type="text" v-model="mTest"/>
		{{mTest}} <br />
		给下面的input的value赋值用v-bind:value="mTest" <br />
		<input type="text" v-bind:value="mTest"/>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				text: '我是v-text测试',
				html: `
					<ul>
						<li>xxx</li>
						<li>uuu</li>
					</ul>
				`,
				isShow: false,
				mTest: 'HaHa'
			}
		}
	}
</script>

<style>
	
</style>