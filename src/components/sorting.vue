<template>
	<div id="sorting">
		<div class="container">
			<h1>Hmmm...Let me think...</h1>
			<img src="../assets/sorting-hat.png" />
		</div>
	</div>
</template>

<script>

	export default {

	data: function() {
		return {
			sortingTime: Math.floor((Math.random() * 5000) + 1),
		}

	},

	methods: {
		switchToHouse: function() {
			this.$router.push('/house');
		},

		sortingWait: function() {
			console.log("Sorting function entered");
			console.log(this.sortingTime/1000);
			setTimeout(function() {this.switchToHouse()}.bind(this), this.sortingTime);
		}
	},

	mounted: function() {
		this.sortingWait()
	}

	}

</script>