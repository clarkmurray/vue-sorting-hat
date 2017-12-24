<template>
<div class="quiz">
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2 text-center">
				<h1>Sorting Hat Quiz</h1>
			</div>
		</div>

		<form name="sortingQuiz" v-on:submit="tallyAnswers(); return false;">
			<div class="row">
				<div class="col-md-8">
					<fieldset v-for="(Question, index) in Questions">
						<h3>{{Question.text}}</h3>
						<label><input type="radio" :value="Question.answers[0].house" :name="'question' + index" required>{{ Question.answers[0].text }}</label>
						<label><input type="radio" :value="Question.answers[1].house" :name="'question' + index">{{ Question.answers[1].text }}</label>
						<label><input type="radio" :value="Question.answers[2].house" :name="'question' + index">{{ Question.answers[2].text }}</label>
						<label><input type="radio" :value="Question.answers[3].house" :name="'question' + index">{{ Question.answers[3].text }}</label>
					</fieldset>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<input type="submit" value="Get Sorted" id="sortMe">
				</div>
			</div>
		</form>

	</div>
</div>

	</div>
</div>
</template>


<script>

	import Vue from 'vue';

	export default {
		name: 'quiz',
		data: function() {
			return {

				houses: {'gryffindor' : 0, 'hufflepuff' : 0, 'ravenclaw' : 0, 'slytherin' : 0},

				houseChosen: 0,

				'Questions': [

				    { 
				      text: 'What is your favorite natural science?',
				      answers: [
				        {
				          text: 'Physics',
				          house: 'Gryffindor'
				        },
				        {
				          text: 'Biology',
				          house: 'Hufflepuff'
				        },
				        {
				          text: 'Astronomy',
				          house: 'Ravenclaw'
				        },
				        {
				          text: 'Chemistry',
				          house: 'Slytherin'
				        }
				      ]
				    },

				    { 
				      text: 'What is your favorite animal?',
				      answers: [
				        {
				          text: 'Lion',
				          house: 'Gryffindor'
				        },
				        {
				          text: 'Badger',
				          house: 'Hufflepuff'
				        },
				        {
				          text: 'Eagle',
				          house: 'Ravenclaw'
				        },
				        {
				          text: 'Snake',
				          house: 'Slytherin'
				        }
				      ]
				    },

				    { 
				      text: 'What kind of person do you try to be?',
				      answers: [
				        {
				          text: 'Brave',
				          house: 'Gryffindor'
				        },
				        {
				          text: 'Loyal',
				          house: 'Hufflepuff'
				        },
				        {
				          text: 'Witty',
				          house: 'Ravenclaw'
				        },
				        {
				          text: 'Cunning',
				          house: 'Slytherin'
				        }
				      ]
				    },

				    { 
				      text: 'Who is your favorite witch or wizard?',
				      answers: [
				        {
				          text: 'Albus Dumbledore',
				          house: 'Gryffindor'
				        },
				        {
				          text: 'Newt Scamander',
				          house: 'Hufflepuff'
				        },
				        {
				          text: 'Garrick Ollivander',
				          house: 'Ravenclaw'
				        },
				        {
				          text: 'Tom Riddle',
				          house: 'Slytherin'
				        }
				      ]
				    },

				    { 
				      text: 'What is your favorite Berty Bott\'s flavor?',
				      answers: [
				        {
				          text: 'Grape',
				          house: 'Gryffindor'
				        },
				        {
				          text: 'Horseradish',
				          house: 'Hufflepuff'
				        },
				        {
				          text: 'Roast Beef',
				          house: 'Ravenclaw'
				        },
				        {
				          text: 'Spinach',
				          house: 'Slytherin'
				        }
				      ]
				    }

				]
			}
		},

		methods: {

			tallyAnswers: function() {
				for (let i=0; i < 5; i++) {
					let question = document.getElementsByName('question' + i);
					for (let j=0; j < question.length; j++) {
						if (question[j].checked) {
							if (question[j].value === "Gryffindor") {
								this.houses.gryffindor++;
							} else if (question[j].value ==="Hufflepuff") {
								this.houses.hufflepuff++;
							} else if (question[j].value==="Ravenclaw") {
								this.houses.ravenclaw++;
							} else if (question[j].value==="Slytherin") {
								this.houses.slytherin++;
							}
						}
					}
				}

				this.sortHouse();
			},

			sortHouse: function() {
				let highest = 0;
				for (let i = 0; i < 4; i++) {
					let value = this.houses[Object.keys(this.houses)[i]];
					if (value > highest) {
						highest = value;
						this.houseChosen = i;
					}
				}
				this.$router.push({ path: `/sorting/${this.houseChosen}` });
			},

			randomizeQuestions: function(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				while (0 !== currentIndex) {

				    randomIndex = Math.floor(Math.random() * currentIndex);
				    currentIndex -= 1;

				    temporaryValue = array[currentIndex];
				    array[currentIndex] = array[randomIndex];
				    array[randomIndex] = temporaryValue;
				}

				return array;
			}
		},

		created: function() {
			this.Questions = this.randomizeQuestions(this.Questions);
			for (let i = 0; i < 4; i++) {
				this.Questions[i].answers = this.randomizeQuestions(this.Questions[i].answers);
			}
		}
	}
</script>

<style>

	body {
		background-image: url("../assets/parchment.jpg");
	}

	fieldset > h3 {
		margin-top: 30px;
		margin-bottom: 20px;
		text-align: left;
		color: black;
	}

	label {
		display: block;
		text-align: left;
		margin: 10px 20px;
		color: black;
	}

	input[type="radio"] {
		text-align: left;
		margin-right: 10px;

	}

	#sortMe {
		display: black;
		text-align: center;
		background-color: black;
		border: none;
		color: white;
		padding: 10px;
		margin: 30px auto;
		
	}

</style>