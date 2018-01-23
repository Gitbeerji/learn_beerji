<template>
	<div>
		<div>列表</div>
		<ul>
			<!-- <li v-for="(hero, index) in heros" :key="index">
				{{hero.name}}
				<router-link :to="{name: 'detailPath', query: {id: hero.id}}">查看英雄信息</router-link>
			</li> -->

			<li v-for="(hero, index) in heros" :key="index">
				{{hero.name}}
				<router-link :to="{name: 'detailPath', params: {id: hero.id}}">查看英雄信息</router-link>
			</li>

			
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				heros: [
					{name: '李白', id: '9527'},
					{name: '王昭君', id: '89757'}
				]
			};
		}
	}
</script>