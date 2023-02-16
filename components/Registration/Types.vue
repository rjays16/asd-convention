<template>
	<section>
		<div class="text-center mh-75">
			<h1 class="dmsans-regular mt-3">Welcome to the <b>4th ASD Meeting Registration Portal!</b></h1>
			<h1 class="mb-5 dmsans-regular">Please choose if you are an international or Philippine delegate to start.</h1>
			<div class="btn-opt dmsans-bold mt-5">
				<button type="button" @click="goToStep(2)" class="btn-blue-round mb-4 ">INTERNATIONAL</button>
				<button type="button" @click="goToStep(11)" class="btn-blue-round mb-5">LOCAL</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
name: "Types.vue",
	methods: {
		goToStep(step){
			this.$parent.goToStep(step);
		}
	}
}
</script>

<style scoped>
.btn-blue-round{
	width: 25%;
	background: #030C4C;
	border-radius: 25px;
	font-size: 35px;
	color: white;
	border: none;
	padding: 10px;
}
.btn-opt button{
	display: block;
	margin: 0 auto;
}
.types-heading {
	font-size: 30px;
	line-height: normal;
}

@media only screen and (max-width: 767px) {
	.btn-blue-round{
		width: 80%;
		font-size: 30px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 1030px) {
	.btn-blue-round{
		width: 50%;
	}
}

@media only screen and (max-width: 300px) {
	.btn-blue-round{
		font-size: 25px;
	}
}
</style>
