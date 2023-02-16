<template>
	<div id="step-4" class="mh-30">
		<h1 class="dmsans-regular mt-3 text-center">Please enter the following information.</h1>
		<h4 class="dmsans-regular mt-3 mb-3 text-wrap p-2 text-center"><b>Note: Use your email address registered in the ASD.</b></h4>
		<div class="inputs col-md-8 mx-auto">
			<div class="row mob-container">
				<div class="col-sm-12 col-md-8 mx-auto p-2">
					<form ref="form">
						<el-input placeholder="Email Address *" v-model="$v.form.email.$model" autocomplete="new-email" size="small" autofocus/>
						<div v-if="$v.form.email.$dirty">
							<div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required</div>
							<div class="note-small color-FF2C2C" v-if="!$v.form.email.email">Must be valid</div>
							<div class="note-small color-FF2C2C" v-if="!$v.form.email.maxLength">Max of {{ $v.form.email.$params.maxLength.max }} characters.</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="text-center mt-5">
			<button @click="goToStep(2)" class="btn-blue-round btn-small">Back</button>
			<button @click="recheckInputs()"  class="btn-blue-round btn-small">Validate</button>
		</div>
	</div>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators/';
export default{
	layout: 'registrationLayout',
	data() {
		return {
			form: {
				email: null
			},
			error: false,
			error_email_registered:"<center>Sorry, your email address is not found in our list of International ASD Membership Records.<br/><br/>Please contact our ASD Registration Committee at this email address - <a href='mailto:registration@asdmeeting2022.com'><b>registration@asdmeeting2022.com</b></a></center> ",
			error_already_registered: this.$store.state.registration.error_already_registered,
		};
	},
	validations: {
		form: {
			email: {
				required,
				email,
				maxLength: maxLength(255)
			},
		}
	},
	methods:{
		goToStep(step) {
			this.$parent.goToStep(step);
		},
		recheckInputs() { // this is used for validation
			if (this.$v.form.$invalid) {
				this.$v.$touch() // this will trigger the vuelidate conditions ($touch)
			} else {
				this.validate();
			}
		},
		validate() { // this is used for validation
			this.$store.dispatch("registration/validateEmail", this.form)
            .then(res => {
				if( res.data.message === "User was already registered" ) {
                    let msg = this.error_already_registered
					this.$confirm ( msg, {
						dangerouslyUseHTMLString: true,
						confirmButtonText: 'Close',
						type: 'warning',
						showCancelButton: false
					});
				}else if( res.data.message === "No user found" ) {
					this.$confirm ( this.error_email_registered, {
						dangerouslyUseHTMLString: true,
						confirmButtonText: 'Close',
						type: 'warning',
						showCancelButton: false
					});
                }else{
					this.$store.commit("registration/SET_PARTIAL_FORM_INFO", res.data);
					this.$parent.goToStep(5);
				}
			})
			.catch(err => {
				console.error(err)
				this.$message.error(err)
            });
		},
	},
	mounted() {
        this.$refs.form.reset();
    }
}
</script>

<style lang="scss" scoped>
.btn-blue-round{
	width: 25%;
	/*background: #040C55;*/
	background: #030C4C;
	border-radius: 22px;
	font-size: 25px;
	color: white;
	border: none;
	margin-bottom: 10px;
}.btn-small{
	width:10%;
	border-radius: 18px;
	font-size: 28px;
	padding: 3px;
	margin:0 8px 0 8px;
}
.el-input {
  &::v-deep input {
    border: 1px solid #040706;
    font-size: 18px;
    padding: 20px;
  }
  &::v-deep input::placeholder {
    color: #343434;
  }
}

@media only screen and (max-width: 767px) {
	.btn-blue-round{
		width: 75%;
	}
	.btn-small{
		width: 38%;
		font-size: 25px;
		border-radius: 18px;
		padding: 5px;
	}
}
@media only screen and (min-width: 768px) and (max-width: 1030px) {
    .btn-small{
        width: 25%;
        font-size: 25px;
    }
}
</style>
