<template>
<div class="quiz">

	<h1>Sorting Hat Quiz</h1>

	<h3>{{Questions[rQ[0]].text}}</h3>
		<input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[0]].text">{{Questions[rQ[0]].answers[rA[0]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[1]].text">{{Questions[rQ[0]].answers[rA[1]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[2]].text">{{Questions[rQ[0]].answers[rA[2]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[0]].answers[rA[3]].text">{{Questions[rQ[0]].answers[rA[3]].text}}</input>

	<h3>{{Questions[rQ[1]].text}}</h3>
		<input type="radio" name="question1" value="Questions[rQ[1]].answers[rA[0]].text">{{Questions[rQ[1]].answers[rA[0]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[1]].answers[rA[1]].text">{{Questions[rQ[1]].answers[rA[1]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[1]].answers[rA[2]].text">{{Questions[rQ[1]].answers[rA[2]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[1]].answers[rA[3]].text">{{Questions[rQ[1]].answers[rA[3]].text}}</input>


	<h3>{{Questions[rQ[2]].text}}</h3>
		<input type="radio" name="question1" value="Questions[rQ[2]].answers[rA[0]].text">{{Questions[rQ[2]].answers[rA[0]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[2]].answers[rA[1]].text">{{Questions[rQ[2]].answers[rA[1]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[2]].answers[rA[2]].text">{{Questions[rQ[2]].answers[rA[2]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[2]].answers[rA[3]].text">{{Questions[rQ[2]].answers[rA[3]].text}}</input>

	<h3>{{Questions[rQ[3]].text}}</h3>
		<input type="radio" name="question1" value="Questions[rQ[3]].answers[rA[0]].text">{{Questions[rQ[3]].answers[rA[0]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[3]].answers[rA[1]].text">{{Questions[rQ[3]].answers[rA[1]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[3]].answers[rA[2]].text">{{Questions[rQ[3]].answers[rA[2]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[3]].answers[rA[3]].text">{{Questions[rQ[3]].answers[rA[3]].text}}</input>

	<h3>{{Questions[rQ[4]].text}}</h3>
		<input type="radio" name="question1" value="Questions[rQ[4]].answers[rA[0]].text">{{Questions[rQ[4]].answers[rA[0]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[4]].answers[rA[1]].text">{{Questions[rQ[4]].answers[rA[1]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[4]].answers[rA[2]].text">{{Questions[rQ[4]].answers[rA[2]].text}}</input>
		<input type="radio" name="question1" value="Questions[rQ[4]].answers[rA[3]].text">{{Questions[rQ[4]].answers[rA[3]].text}}</input>

</div>
</template>


<script>
	export default {
		name: 'quiz',
		data: function() {
			return {

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
			}
		},

		mounted: function() {
			this.randomizeQuestions();
			this.randomizeAnswers();

		}
	}
</script>