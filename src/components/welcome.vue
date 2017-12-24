<template>
	<div id="welcome">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<h1>Sorting Hat Quiz</h1>
					<img src="src/assets/hogwarts_crest.png">
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<router-link to="/quiz"><button id="takeQuiz">Take Quiz</button></router-link>
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
	text-decoration: none;
}


</style>