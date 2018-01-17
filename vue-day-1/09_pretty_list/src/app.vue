<template>
	<div>
		<div>
			<ul>
				<li v-for="(hero, index) in heros" :key="index" :class="hClass[hero.score]">
					<span>{{hero.name}} - {{hero.score}}</span>
					<button @click="del(index)">删除</button>
				</li>
			</ul>
		</div>
		<div>
			<div>
				<span>英雄名字:</span>
				<input type="text" v-model="hName"/>
			</div>
			<div>
				<span>英雄成绩:</span>
				<input type="text" v-model="hScore"/>
			</div>
			<div>
				<button @click="addHero">添加英雄</button>
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		data(){
			return {
				hName: '', hScore: '',
				hClass: {
					'A': 'red',
					'B': 'blue',
					'C': 'yellow',
					'D': 'green',
					'E': 'pink'
				},
				heros: [
					{name: '熊吉', score: 'A'},
					{name: '兔美', score: 'B'},
					{name: '喵美', score: 'C'},
					{name: '小野妹子', score: 'D'},
					{name: '圣德太子', score: 'E'},
				]
			}
		},
		methods: {
			addHero(){
				if(!( this.hName && this.hScore )) return;
				this.heros.push({name: this.hName, score: this.hScore});
				this.hName = this.hScore = '';
			},
			del(index){
				this.heros.splice(index, 1);
			}
		}
	}
</script>

<style>
	ul span { display: inline-block; width: 140px; }
	.red { background-color: red; }
	.blue { background-color: blue; }
	.yellow { background-color: yellow; }
	.green { background-color: green; }
	.pink { background-color: pink; }
</style>
