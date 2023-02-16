<template>
	<div>
		<RegistrationTypes v-if="current_step === 1"/>
		<RegistrationIdeapay v-if="current_step === 24"/>

		<!-- <RegistrationSuccessful v-if="current_step === 25"/> -->

		<!--International-->
		<RegistrationIntlStep2 v-if="current_step === 2"/><!--delegate types-->
		<RegistrationIntlStep3 v-if="current_step === 3"/><!--Validation-->
		<RegistrationIntlStep4 v-if="current_step === 4"/><!--upload IMG-->
		<RegistrationIntlStep5 v-if="current_step === 5" :countries="countries"/><!--ASD FORM-->
		<RegistrationIntlStep6 v-if="current_step === 6" :countries="countries"/><!--NON-ASD FORM-->
		<RegistrationIntlStep7 v-if="current_step === 7" :countries="countries"/><!--FELLOW-RESIDENT FORM-->
		<RegistrationIntlStep8 v-if="current_step === 8"/><!--PAYMENT DETAILS ASD-->
		<RegistrationIntlStep9 v-if="current_step === 9"/><!--PAYMENT DETAILS NON-ASD-->
		<RegistrationIntlStep10 v-if="current_step === 10"/><!--PAYMENT DETAILS FELLOW-RESIDENT-->
		<!--Local-->
		<RegistrationLocalStep2 v-if="current_step === 11"/><!--delegate type-->
		<RegistrationLocalStep3 v-if="current_step === 12"/><!--ASD type-->
		<RegistrationLocalStep4 v-if="current_step === 13"/><!--ASD validation-->
		<RegistrationLocalStep5 v-if="current_step === 14"/><!--uplaod image for resident-->
		<RegistrationLocalStep6 v-if="current_step === 15"/><!--ASD Form -->
		<RegistrationLocalStep7 v-if="current_step === 16"/><!--nonASD Form -->
		<RegistrationLocalStep8 v-if="current_step === 17"/><!--Resident Form -->
		<RegistrationLocalStep9 v-if="current_step === 18"/><!--ASD payment -->
		<RegistrationLocalStep10 v-if="current_step === 19"/><!--nonASD payment -->
		<RegistrationLocalStep11 v-if="current_step === 20"/><!--Resident payment -->
		<!--Adding for non-asd type and validation dinulo ko na lang ang number para hindi na mag re-route -->
		<RegistrationLocalStep12 v-if="current_step === 21"/><!--Non-ASD types-->
		<RegistrationLocalStep13 v-if="current_step === 22"/><!--Non-ASD validation-->
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default{
	layout: 'registrationLayout',
	data(){
		return {
			current_step: 1,
		}
	},
	computed: {
        ...mapGetters({
            countries: 'options/getCountries',
        }),
    },
	methods: {
		goToStep(step){
			this.current_step = step;
			console.log("Current Registration Step:", this.current_step)
		},
	},
	mounted() {
        this.$store.dispatch("options/getCountries") // Get the list of countries
    }
}
</script>

<style scoped>
	.btn-blue-round{
		width: 200px;
		/*background: #040C55;*/
		background: #030C4C;
		border-radius: 22px;
		font-size: 25px;
		color: white;
		border: none;
		margin-bottom: 10px;
	}
	.btn-opt button{
		display: block;
		margin: 0 auto;
		margin-bottom: 10px;
	}
</style>
