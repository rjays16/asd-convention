<template>
	<div id="step-4">
		<h1 class="dmsans-bold mt-3 text-center">LOCAL (PHILIPPINES) NON-ASD MEMBER</h1>
		<div class="inner-content">
			<div class="inputs col-md-8 mx-auto">
				<div class="row mob-container">
					<div class="col-sm-12 col-md-8 mx-auto p-2">
						<p class="fs-16p"><b>Note: The PDS Number is case sensitive. The first five characters are  numerical digits. The last character is a letter in upper case.</b></p>
						<el-input placeholder="PDS ID Number *" v-model="$v.form.pds_number.$model" autocomplete="new-email" size="small"></el-input>
						<div v-if="$v.form.pds_number.$dirty">
							<div class="note-small color-FF2C2C" v-if="!$v.form.pds_number.required">Required</div>
							<div class="note-small color-FF2C2C" v-if="!$v.form.pds_number.maxLength">Max of {{ $v.form.email.$params.maxLength.max }} characters.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center mt-5">
				<button @click="goToStep(21)" class="btn-blue-round btn-small">Back</button>
                <!-- <button @click="goToStep(16)" class="btn-blue-round btn-small">Validate</button> --> <!-- testing purpose only -->
				<button @click="recheckInputs()" class="btn-blue-round btn-small">Validate</button>
			</div>
		</div>
	</div>
</template>
<script>
import { required, maxLength} from 'vuelidate/lib/validators/';
export default{
	layout: 'registrationLayout',
	data() {
      	return {
            form: {
				pds_number: null,
				member_type: 2,
				is_pds: true
            },
			error: false,
			error_email_registered:"<center>Sorry, your PDS ID Number is not found in our list of International ASD Membership Records.<br/><br/>Please contact our ASD Registration Committee at this email address - <a href='mailto:registration@asdmeeting2022.com'><b>registration@asdmeeting2022.com</b></a></center> ",
			error_already_registered: this.$store.state.registration.error_already_registered,
        };
    },
	validations: {
        form: {
			pds_number: {
				required,
				maxLength
			},
		}
    },
	methods:{
		goToStep(step) {
			this.$parent.goToStep(step);
		},
		recheckInputs() { // this is used for validation
			this.$v.form.$touch();
            if (this.$v.form.$invalid) {
                this.$message.error("Please fill in the email field correcty.");
            } else {
                this.validate();
            }
		},
		validate(){
			this.$store.dispatch("registration/validatePDSNumber", this.form)
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
                	this.$parent.goToStep(16);
				}
			})
			.catch(err => {
				console.error(err)
				this.$message.error(err)
            });
		},
	}
}
</script>

<style lang="scss" scoped>
.btn-blue-round{
	width: 25%;
	background: #030C4C;
	border-radius: 22px;
	font-size: 25px;
	color: white;
	border: none;
	margin-bottom: 10px;
}
.btn-small{
	width: 180px;
	font-size: 25px;
	line-height: 22px;
	padding: 0.5em 0;
}

#confirm {
	display: none;
	background-color: #F3F5F6;
	color: #000000;
	border: 1px solid #aaa;
	position: fixed;
	width: 35%;
	height: 20%;
	left: 40%;
	top:40%;
	margin-left: -100px;
	padding: 10px 20px 10px;
	box-sizing: border-box;
	text-align: center;
}
#confirm button {
	background-color: #FFFFFF;
	display: inline-block;
	border-radius: 12px;
	border: 4px solid #aaa;
	padding: 5px;
	text-align: center;
	width: 60px;
	cursor: pointer;
}
#confirm .message {
	text-align: center;
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
		width: 130px;
		font-size: 25px;
		padding: .5em;
	}
}
</style>
