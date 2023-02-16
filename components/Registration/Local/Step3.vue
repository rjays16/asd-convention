<template>
	<section>
		<div>
			<div class="container">
				<p class="capt dmsans-regular fs-12m">Are you a PDS Member?</p>
				<div class="inner-content">
					<div class="btn-opt dmsans-bold">
						<button @click="setISPDSTRUE()" class="btn-blue-round">Yes</button>
						<button @click="setISPDSFALSE()" class="btn-blue-round">No</button>
						<button @click="goToStep(11)" class="btn-blue-round btn-small mt-5">Back</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
name: "Step3",
	methods: {
		goToStep(step) {
			this.$parent.goToStep(step);
		},
		setISPDSTRUE(){
			this.$store.commit("registration/SET_IS_PDS", { is_pds: true });
			this.goToStep(13);
		},
		setISPDSFALSE(){
			this.$store.commit("registration/SET_IS_PDS", { is_pds: false });
			this.goToStep(15);
		}
	}
}
</script>

<style scoped>
.btn-blue-round{
  width: 30%;
  background: #030C4C;
  border-radius: 40px;
  font-size: 35px;
  color: white;
  border: none;
  padding: 10px;
}
.btn-opt button{
  display: block;
  margin: 0 auto 10px;
}
.capt.dmsans-regular {
	font-size: 25px;
    font-weight: 700;
}
.btn-small{
	width: 100px;
	border-radius: 20px;
	font-size: 18px;
}
@media only screen and (max-width: 767px) {
	.btn-blue-round{
		width: 75%;
	}
	.btn-small{
		width: 100px;
		font-size: 18px;
	}
}
</style>
