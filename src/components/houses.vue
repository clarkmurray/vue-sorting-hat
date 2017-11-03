<template>
	<div class="house">
		<div class="container">
			<div class="row text-center">
				<h1>Welcome to {{Houses[houseIndex].name}}!!!</h1>
			</div>
			<div class="row flex-row">
				<div class="col-md-5 text-center">
					<img v-bind:src="Houses[houseIndex].crest" />
				</div>
				<div class="col-md-7">
					<p class="text-left">{{Houses[houseIndex].description}}</p>
					<div class="buttonDiv">
					<!-- <button id="resort" v-on:click="initialSort">Sort Again</button> -->
					<button id="resort"><router-link to="/quiz">Sort Again</router-link></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>

	export default {
	name: 'house',
	props: ['houseIndex'],
	data: function() {
		return {
			'Houses': [

		    {
		      name: 'Gryffindor',
		      description: 'Here dwell the brave of heart. Your courage and chilvalry are second to none, and you are always up for a good adventure.',
		      crest: "src/assets/gryffindor.png"

		    },
		    {
		      name: 'Hufflepuff',
		      description: 'Your honor knows no bounds. Only the honest, fair, and kind need apply.',
		      crest: "src/assets/hufflepuff.png"
		    },
		    {
		      name: 'Ravenclaw',
		      description: 'Congratulations on being the smartest person in the room! You possess both intelligence and wisdom, as well as a creative spark that sets you apart from your peers.',
		      crest: "src/assets/ravenclaw.png"
		    },
		    {
		      name: 'Slytherin',
		      description: 'Neither amibition nor cunning are in short supply. You are a survivor, doing whatever it takes to flourish. Prone to pretension.',
		      crest: "src/assets/slytherin.png"
		    }

		  ],

		}
	}

	}

</script>

<style>


	body {
		background-image: url("../assets/parchment.jpg");
	}

	h1 {
		margin-top: 0px;
		margin-bottom: 50px;
		color: black;
	}

	#resort {
		text-align: center;
		margin: auto;
		background-color: black;
		color: white;
		border: none;
		padding: 10px;
		margin-top: 30px;
		
	}

	.row.flex-row {
		display: flex;
		flex-wrap: wrap;
	}

	div > p {
		font-weight: bold;
		color: black;
	}

</style>