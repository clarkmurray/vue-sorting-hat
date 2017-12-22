<template>
	<div id="welcome">
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<h1>Sorting Hat Quiz</h1>
					<img src="src/assets/hogwarts_crest.png">
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<button id="takeQuiz"><router-link to="/quiz">Take Quiz</router-link></button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>

#takeQuiz {
	margin-top: 35px;
	background-color: black;
	padding: 10px;
	border: none;
	color: white;
}

#takeQuiz > a {
	color: white;
	text-decoration: none;

}

</style>