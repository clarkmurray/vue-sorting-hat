<template>
	<div class="house">
		<h1>Welcome to {{Houses[this.randomHouse].name}}!!!</h1>
		<p>{{Houses[this.randomHouse].description}}</p>
		<button v-on:click="sortAgain">Sort Again</button>
	</div>
</template>


<script>
	export default {
	name: 'house',
	data: function() {
		return {
			'Houses': [

		    {
		      name: 'Gryffindor',
		      description: 'Here dwell the brave of heart. Your courage and chilvalry are second to none, and you are always up for a good adventure.'
		    },
		    {
		      name: 'Hufflepuff',
		      description: 'Your honor knows no bounds. Only the honest, fair, and kind need apply.'
		    },
		    {
		      name: 'Ravenclaw',
		      description: 'Congratulations on being the smartest person in the room! You possess both intelligence and wisdom, as well as a creative spark that sets you apart from your peers.'
		    },
		    {
		      name: 'Slytherin',
		      description: 'Neither amibition nor cunning are in short supply. You are a survivor, doing whatever it takes to flourish. Prone to pretension.'
		    }

		  ],

		  randomHouse: Math.floor(Math.random() * 4)
		}
	},
	methods: {
		sortAgain: function() {
			this.randomHouse = Math.floor(Math.random() * 4);
		}
	}
	}
</script>