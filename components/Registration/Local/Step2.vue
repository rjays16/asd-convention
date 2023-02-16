<template>
	<section>
		<div id="intl-step2">
			<div class="text-center dmsans-regular">
				<h1 class="dmsans-bold intl-heading">LOCAL (PHILIPPINES)</h1>
				<h3>Please choose your Delegate category.</h3>
				<div class="inner-content">
				<div class="btn-opt dmsans-bold">
					<button @click="goToStep(12)" class="btn-blue-round text-uppercase"> ASD Member </button>
					<button @click="goToStep(21)" class="btn-blue-round text-uppercase"> Non-ASD Member </button>
					<button @click="goToStep(14)" class="btn-blue-round text-uppercase mb-5"> Resident / Fellow </button>
				</div>
				<button @click="goToStep(1)" class="btn-blue-round btn-small mt-3"> Back </button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Form",
	methods: {
		goToStep(step) {
			this.$parent.goToStep(step);
		},
	},
}
</script>

<style lang="scss" scoped>
.btn-blue-round{
	width: 30%;
	background: #030C4C;
	border-radius: 28px;
	font-size: 35px;
	color: white;
	border: none;
	padding: 10px;
}
.btn-opt button{
	display: block;
	margin: 0 auto 10px;
}
.intl-heading {
	font-size: 45px;
	line-height: normal;
}
.btn-small{
	width: 12%;
	border-radius: 25px;
	font-size: 28px;
}
@media only screen and (max-width: 767px) {
	.btn-blue-round{
		width: 80%;
	}
	.btn-small{
		width: 30%;
		font-size: 25px;
		border-radius: 20px;
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
