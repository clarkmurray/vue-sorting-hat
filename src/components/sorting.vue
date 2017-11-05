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
			// sortingTime: Math.floor((Math.random() * 5000) + 1000),
			sortingTime: 10000,
		}

	},

	methods: {
		switchToHouse: function() {
			this.$router.push('/house');
		},

		sortingWait: function() {
			console.log(this.sortingTime/1000);
			setTimeout(function() {this.switchToHouse()}.bind(this), this.sortingTime);
		}
	},

	mounted: function() {
		this.sortingWait()
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