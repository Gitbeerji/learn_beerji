<template>
	<div>
		<ul>
			<li v-for="(hero, index) in heros" :key="index">
				{{hero.name}}, {{hero.score}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				heros: [
					{id: 1, name: '奥利安娜', score: 'A'},
					{id: 2, name: '崔斯特', score: 'B'},
					{id: 3, name: '雷锋', score: 'D'},
					{id: 4, name: '阿拉斯加', score: 'A'},
					{id: 5, name: '哈士奇', score: 'D'},
					{id: 6, name: '妲己', score: 'S'},
					{id: 7, name: '阿卡丽', score: 'A'}
				]
			}
		}
	}
</script>