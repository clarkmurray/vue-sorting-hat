<template>
	<div class="house">
		<div v-if="!alreadySorted" class="container">
			<h1>{{ headMSG }}{{ ellipsisLoad }}</h1>
			<img src="../assets/sorting-hat.png" />
		</div>

		<div  v-if ="alreadySorted" class="container">
			<div class="row text-center">
				<h1>Welcome to {{Houses[this.randomHouse].name}}!!!</h1>
			</div>
			<div class="row flex-row">
				<div class="col-md-5 text-center">
					<img v-bind:src="Houses[this.randomHouse].crest" />
				</div>
				<div class="col-md-7">
					<p class="text-left">{{Houses[this.randomHouse].description}}</p>
					<div class="buttonDiv">
					<button id="resort" v-on:click="initialSort">Sort Again</button>
					</div>
				</div>
			</div>
		</div>

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

		  randomHouse: Math.floor(Math.random() * 4),

		  alreadySorted: false,

		  headMSG: "Vue Sorting Hat",

		  sortingTime: Math.floor((Math.random() * 30000) + 1),

		  ellipsisLoad: ''
		}
	},

	methods: {
		sortAgain: function() {
			this.alreadySorted = true;
			this.randomHouse = Math.floor(Math.random() * 4);
			this.sortingTime = Math.floor((Math.random() * 5000) + 1);

		},

		initialSort: function() {
			this.alreadySorted = false;
			this.headMSG = "Hmmm...let me think";
			console.log(this.sortingTime/1000);
			setTimeout(function() {this.sortAgain()}.bind(this), this.sortingTime);
		}
	},

	mounted: function() {
		this.initialSort()
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