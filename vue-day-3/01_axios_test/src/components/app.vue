<template>
	<div>
		<div class="search">
			<input type="text" v-model:value="key" placeholder="请输入关键词" @input="search"/>
			<button @click="search">搜索</button>

			<div class="result" v-show="results.length">
				<ul>
					<li v-for="(res , index) in results" :key="index" @click="show(res)">{{res}}</li>
				</ul>
			</div>
		</div>
		<div> {{res}}</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				key: '',
				results: [],
				res: ''
			};
		},
		methods: {
			search(){
				//console.log(this.key);
				if(!this.key){
					this.results = []; 
					return; 
				}
				//console.log('xx');
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
				{params: {wd: this.key}, jsonp: 'cb'})
				.then(res=>{
					this.results = JSON.parse(res.bodyText).s;
				},err=>{
					console.log('err', err);
				});
			},
			show(res){
				this.res = res;
				this.results = [];
			}
		},
		created(){
			function getMsg(res1, res2){
				console.log(res1);
				console.log(res2);
			}
			//将两个请求一起发送，只要有一个失败，就算失败，成功只有是全体成功
			this.$axios.all([
				this.$axios.post('postcomment/300', 'content=123'),
				this.$axios.get('getcomment/300?pageindex=1')
			])
			//分发响应
			.then(this.$axios.spread(getMsg))
			.catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.search {
		position: relative;
	}
	.search input {
		border: solid 1px #CCC;
		height: 20px;
		line-height: 20px;
		padding: 4px 8px;
		outline: 0;
		border-radius: 5px;
	}
	.search button {
		display: inline-block;
		height: 30px;
		width: 60px;
		border: 0;
		background-color: #26E4FF;
		color: #FFF;
		border-radius: 5px;
		cursor: pointer;
		outline: 0;
	}
	.result {
		position: absolute;
		top: 32px;
		left: 0;
		background: #FFF;
		padding: 2px 0;
		border: solid 1px #CCC;
		border-radius: 5px;
	}
	.result ul {
		padding: 0;
		margin: 0;
		list-style: none;
		width: 300px;
	}
	.result ul li {
		border-bottom: solid 1px #CCC;
		padding: 3px 10px;
	}

	.result ul li:hover {
		background-color: #CCC;
	}

	.result ul li:last-child {
		border: 0;
	}
</style>