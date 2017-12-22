<template>
<div class="quiz">
	<div class="container">
	<h1>Sorting Hat Quiz</h1>

	<form name="sortingQuiz">
	<h3>{{Questions[rQ[0]].text}}</h3>
		<label><input type="radio" name="question1" v-bind:value="Questions[rQ[0]].answers[rA[0]].house">{{Questions[rQ[0]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question1" v-bind:value="Questions[rQ[0]].answers[rA[1]].house">{{Questions[rQ[0]].answers[rA[1]].text}}</input></label>
		<label><input type="radio" name="question1" v-bind:value="Questions[rQ[0]].answers[rA[2]].house">{{Questions[rQ[0]].answers[rA[2]].text}}</input></label>
		<label><input type="radio" name="question1" v-bind:value="Questions[rQ[0]].answers[rA[3]].house">{{Questions[rQ[0]].answers[rA[3]].text}}</input></label>

	<h3>{{Questions[rQ[1]].text}}</h3>
		<label><input type="radio" name="question2" v-bind:value="Questions[rQ[1]].answers[rA[0]].house">{{Questions[rQ[1]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question2" v-bind:value="Questions[rQ[1]].answers[rA[1]].house">{{Questions[rQ[1]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question2" v-bind:value="Questions[rQ[1]].answers[rA[2]].house">{{Questions[rQ[1]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question2" v-bind:value="Questions[rQ[1]].answers[rA[3]].house">{{Questions[rQ[1]].answers[rA[3]].text}}</label>


	<h3>{{Questions[rQ[2]].text}}</h3>
		<label><input type="radio" name="question3" v-bind:value="Questions[rQ[2]].answers[rA[0]].house">{{Questions[rQ[2]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question3" v-bind:value="Questions[rQ[2]].answers[rA[1]].house">{{Questions[rQ[2]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question3" v-bind:value="Questions[rQ[2]].answers[rA[2]].house">{{Questions[rQ[2]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question3" v-bind:value="Questions[rQ[2]].answers[rA[3]].house">{{Questions[rQ[2]].answers[rA[3]].text}}</label>

	<h3>{{Questions[rQ[3]].text}}</h3>
		<label><input type="radio" name="question4" v-bind:value="Questions[rQ[3]].answers[rA[0]].house">{{Questions[rQ[3]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question4" v-bind:value="Questions[rQ[3]].answers[rA[1]].house">{{Questions[rQ[3]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question4" v-bind:value="Questions[rQ[3]].answers[rA[2]].house">{{Questions[rQ[3]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question4" v-bind:value="Questions[rQ[3]].answers[rA[3]].house">{{Questions[rQ[3]].answers[rA[3]].text}}</label>

	<h3>{{Questions[rQ[4]].text}}</h3>
		<label><input type="radio" name="question5" v-bind:value="Questions[rQ[4]].answers[rA[0]].house">{{Questions[rQ[4]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question5" v-bind:value="Questions[rQ[4]].answers[rA[1]].house">{{Questions[rQ[4]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question5" v-bind:value="Questions[rQ[4]].answers[rA[2]].house">{{Questions[rQ[4]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question5" v-bind:value="Questions[rQ[4]].answers[rA[3]].house">{{Questions[rQ[4]].answers[rA[3]].text}}</label>
	</form>

			<button id="sortMe" v-on:click="calculateAnswers">Get Sorted!</button>


</div>
</div>

</template>


<script>

	import Vue from 'vue';

	export default {
		name: 'quiz',
		data: function() {
			return {

				gryffindor: 0,

				hufflepuff: 0,

				ravenclaw: 0,

				slytherin: 0,

				housesArray: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],

				houseChosen: '',

				rQ: [0, 1, 2, 3, 4],

				rA: [0, 1, 2, 3],

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
			randomizeQuestions : function() {
				this.rQ = this.rQ.sort(function() { return 0.4 - Math.random() });
			},

			randomizeAnswers: function() {
				this.rA = this.rA.sort(function() { return 0.3 - Math.random() });
			},

			calculateAnswers: function() {
				for (var j=0; j <= 5; j++) {
					var questionOne = document.getElementsByName('question' + j);
					for (var i=0; i < questionOne.length; i++) {
						if (questionOne[i].checked) {
							if (questionOne[i].value === "Gryffindor") {
								this.gryffindor++;
							} else if (questionOne[i].value === "Hufflepuff") {
								this.hufflepuff++;
							} else if (questionOne[i].value === "Ravenclaw") {
								this.ravenclaw++;
							} else if (questionOne[i].value === "Slytherin") {
								this.slytherin++;
							}
						}
					}
				}

				var houseValues = [{name: "gryffindor", value: this.gryffindor}, {name: "hufflepuff", value: this.hufflepuff}, {name: "ravenclaw", value: this.ravenclaw}, {name: "slytherin", value: this.slytherin}];

				houseValues.sort(function(a, b){
   					return b.value - a.value;
				});

				var firstLetterOfHouse = houseValues[0].name.charAt(0).toUpperCase();

				var houseWithoutFirstLetter = houseValues[0].name.slice(1);

				this.houseChosen = firstLetterOfHouse + houseWithoutFirstLetter;

				this.findHouse();
			


			},

			findHouse: function() {
				for (var i=0; i < 4; i++) {
					if (this.houseChosen === this.housesArray[i]) {
						this.houseIndex = i;
					}
				}

				Vue.prototype.$houseIndex= this.houseIndex;

				this.$router.push('/sorting');
			}

		},

		mounted: function() {
			this.randomizeQuestions();
			this.randomizeAnswers();

		}
	}
</script>

<style>

	body {
		background-image: url("../assets/parchment.jpg");
	}

	form > h3 {
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