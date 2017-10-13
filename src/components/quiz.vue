<template>
<div class="quiz">
	<div class="container">
	<h1>Sorting Hat Quiz</h1>

	<form name="sortingQuiz">
	<h3>{{Questions[rQ[0]].text}}</h3>
		<label><input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[0]].text">{{Questions[rQ[0]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[1]].text">{{Questions[rQ[0]].answers[rA[1]].text}}</input></label>
		<label><input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[2]].text">{{Questions[rQ[0]].answers[rA[2]].text}}</input></label>
		<label><input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[3]].text">{{Questions[rQ[0]].answers[rA[3]].text}}</input></label>

	<h3>{{Questions[rQ[1]].text}}</h3>
		<label><input type="radio" name="question2" value="Questions[rQ[1]].answers[rA[0]].text">{{Questions[rQ[1]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question2" value="Questions[rQ[1]].answers[rA[1]].text">{{Questions[rQ[1]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question2" value="Questions[rQ[1]].answers[rA[2]].text">{{Questions[rQ[1]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question2" value="Questions[rQ[1]].answers[rA[3]].text">{{Questions[rQ[1]].answers[rA[3]].text}}</label>


	<h3>{{Questions[rQ[2]].text}}</h3>
		<label><input type="radio" name="question3" value="Questions[rQ[2]].answers[rA[0]].text">{{Questions[rQ[2]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question3" value="Questions[rQ[2]].answers[rA[1]].text">{{Questions[rQ[2]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question3" value="Questions[rQ[2]].answers[rA[2]].text">{{Questions[rQ[2]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question3" value="Questions[rQ[2]].answers[rA[3]].text">{{Questions[rQ[2]].answers[rA[3]].text}}</label>

	<h3>{{Questions[rQ[3]].text}}</h3>
		<label><input type="radio" name="question4" value="Questions[rQ[3]].answers[rA[0]].text">{{Questions[rQ[3]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question4" value="Questions[rQ[3]].answers[rA[1]].text">{{Questions[rQ[3]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question4" value="Questions[rQ[3]].answers[rA[2]].text">{{Questions[rQ[3]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question4" value="Questions[rQ[3]].answers[rA[3]].text">{{Questions[rQ[3]].answers[rA[3]].text}}</label>

	<h3>{{Questions[rQ[4]].text}}</h3>
		<label><input type="radio" name="question5" value="Questions[rQ[4]].answers[rA[0]].text">{{Questions[rQ[4]].answers[rA[0]].text}}</label>
		<label><input type="radio" name="question5" value="Questions[rQ[4]].answers[rA[1]].text">{{Questions[rQ[4]].answers[rA[1]].text}}</label>
		<label><input type="radio" name="question5" value="Questions[rQ[4]].answers[rA[2]].text">{{Questions[rQ[4]].answers[rA[2]].text}}</label>
		<label><input type="radio" name="question5" value="Questions[rQ[4]].answers[rA[3]].text">{{Questions[rQ[4]].answers[rA[3]].text}}</label>
		<input id="sortMe" type="submit" value="Get Sorted!" v-on:click="calculateAnswers"></input>
	</form>

</div>
</div>
</template>


<script>
	export default {
		name: 'quiz',
		data: function() {
			return {

				Gryffindor: 0,

				Hufflepuff: 0,

				Ravenclaw: 0,

				Slytherin: 0,

				rQ: [0, 1, 2, 3, 4],

				rA: [0, 1, 2, 3],

				'Questions': [

				    { 
				      text: 'What is your favorite color?',
				      answers: [
				        {
				          text: 'Scarlet',
				          house: 'Gryffindor'
				        },
				        {
				          text: 'Yellow',
				          house: 'Hufflepuff'
				        },
				        {
				          text: 'Blue',
				          house: 'Ravenclaw'
				        },
				        {
				          text: 'Green',
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
		display: block;
		margin: 30px auto;
	}

</style>