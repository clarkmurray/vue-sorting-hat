<template>
<div class="quiz">
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2 text-center">
				<h1>Sorting Hat Quiz</h1>
			</div>
		</div>

		<form name="sortingQuiz" v-on:submit="calculateAnswer(); return false;">
			<fieldset v-for="(Question, index) in Questions">
				<h3>{{Question.text}}</h3>
				<label><input type="radio" :value="Question.answers[0].house" :name="'question' + index">{{ Question.answers[0].text }}</label>
				<label><input type="radio" :value="Question.answers[1].house" :name="'question' + index">{{ Question.answers[1].text }}</label>
				<label><input type="radio" :value="Question.answers[2].house" :name="'question' + index">{{ Question.answers[2].text }}</label>
				<label><input type="radio" :value="Question.answers[3].house" :name="'question' + index">{{ Question.answers[3].text }}</label>
			</fieldset>
			<input type="submit" value="Get Sorted" id="sortMe">
		</form>

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

			calculateAnswer: function() {
				for (let i=0; i < 5; i++) {
					let question = document.getElementsByName('question' + i);
					for (let j=0; j < question.length; j++) {
						if (question[j].checked) {
							if (question[j].value === "Gryffindor") {
								this.gryffindor++;
							} else if (question[j].value ==="Hufflepuff") {
								this.hufflepuff++;
							} else if (question[j].value==="Ravenclaw") {
								this.ravenclaw++;
							} else if (question[j].value==="Slytherin") {
								this.slytherin++;
							}
						}
					}
				}

				alert("Gryffindor: " + this.gryffindor + ", Hufflepuff: " + this.hufflepuff + ", Ravenclaw: " + this.ravenclaw + ", Slytherin: " + this.slytherin);
			},

			randomizeQuestions: function(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				  // While there remain elements to shuffle...
				while (0 !== currentIndex) {

				    // Pick a remaining element...
				    randomIndex = Math.floor(Math.random() * currentIndex);
				    currentIndex -= 1;

				    // And swap it with the current element.
				    temporaryValue = array[currentIndex];
				    array[currentIndex] = array[randomIndex];
				    array[randomIndex] = temporaryValue;
				}

				return array;
			}
		},

		// 		var houseValues = [{name: "gryffindor", value: this.gryffindor}, {name: "hufflepuff", value: this.hufflepuff}, {name: "ravenclaw", value: this.ravenclaw}, {name: "slytherin", value: this.slytherin}];

		// 		houseValues.sort(function(a, b){
  //  					return b.value - a.value;
		// 		});

		// 		var firstLetterOfHouse = houseValues[0].name.charAt(0).toUpperCase();

		// 		var houseWithoutFirstLetter = houseValues[0].name.slice(1);

		// 		this.houseChosen = firstLetterOfHouse + houseWithoutFirstLetter;

		// 		this.findHouse();
			


		// 	},

		// 	findHouse: function() {
		// 		for (var i=0; i < 4; i++) {
		// 			if (this.houseChosen === this.housesArray[i]) {
		// 				this.houseIndex = i;
		// 			}
		// 		}

		// 		Vue.prototype.$houseIndex= this.houseIndex;

		// 		this.$router.push('/sorting');
		// 	}

		// },

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