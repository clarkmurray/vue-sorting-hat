<template>
	<div id="sorting">
		<div class="container">
			<h1 class="loading">Hmmm...Let me think</h1>
			<img src="../assets/sorting-hat.png" />
		</div>
	</div>
</template>

<script>

	export default {
	data: function() {
		return {
			sortingTime: 3,
			houseChosen: this.$route.params.house
		}

	},

	methods: {
		switchToHouse: function() {
			this.$router.push({ path: `/house/${this.houseChosen}` });
		},

		sortingWait: function() {
			console.log(this.sortingTime/1000);
			setTimeout(function() {this.switchToHouse()}.bind(this), this.sortingTime);
		},

		randomSortingTime: function(min, max) {
			min = Math.ceil(min);
  			max = Math.floor(max);
  			this.sortingTime = Math.floor(Math.random() * (max - min + 1)) + min;
  			return this.sortingTime = this.sortingTime * 1000;
		}
	},

	mounted: function() {
		this.randomSortingTime(3, 6);
		this.sortingWait();
	}

	}

</script>

<style>

	.loading:after {
	  overflow: hidden;
	  display: inline-block;
	  vertical-align: bottom;
	  -webkit-animation: ellipsis steps(4,end) 3000ms infinite;      
	  animation: ellipsis steps(4,end) 3000ms infinite;
	  content: "\2026";
	  width: 0px;
	  position: absolute;
	}

	@keyframes ellipsis {
  		to {
    		width: 1.25em;    
  		}
	}	

	@-webkit-keyframes ellipsis {
  		to {
    		width: 1.25em;    
  		}
	}

</style>