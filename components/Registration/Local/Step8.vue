<template>
	<div id="step-8">
		<div class="container">
			<p class="capt dmsans-bold fs-15m ">LOCAL (PHILIPPINES) RESIDENT / FELLOW </p>
			<div class="inner-content">
				<div class="form-section dmsans-regular">
					<form>
						<div class="rows d-flex justify-content-between">
							<div class="col-sm-4 p-2">
								<el-input placeholder="Last Name *" v-model="$v.form.last_name.$model"></el-input>
								<div v-if="$v.form.last_name.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.maxLength">Max of {{ $v.form.last_name.$params.maxLength.max }} characters.</div>
                                </div>
							</div>
							<div class="col-sm-4 p-2">
								<el-input placeholder="First Name *" v-model="$v.form.first_name.$model" ></el-input>
								<div v-if="$v.form.first_name.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.maxLength">Max of {{ $v.form.first_name.$params.maxLength.max }} characters.</div>
                                </div>
							</div>
							<div class="col-sm-4 p-2">
								<el-input placeholder="M.I." v-model="$v.form.middle_name.$model"></el-input>
							</div>
						</div>
						<div class="d-flex justify-content-between">
							<div class="col-4 p-2">
								<el-input placeholder="Suffix" v-model="$v.form.suffix.$model"></el-input>
								<div v-if="$v.form.suffix.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.suffix.maxLength">Max of {{ $v.form.suffix.$params.maxLength.max }} characters.</div>
                                </div>
							</div>
							<div class="col-8 p-2">
								<el-input placeholder="Professional Suffix (separated by comma)" v-model="$v.form.prof_suffix.$model"></el-input>
                                <div v-if="$v.form.prof_suffix.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.prof_suffix.maxLength">Max of {{ $v.form.prof_suffix.$params.maxLength.max }} characters.</div>
                                </div>
							</div>
						</div>
						<div class="col-sm-12 p-2">
							<label>Please type in how your Complete Name will appear in your certificate.</label>
							<el-input placeholder="JUAN A. DELA CRUZ II, MD, FPDS" v-model="$v.form.certificate_name.$model"></el-input>
							<div v-if="$v.form.certificate_name.$dirty" >
								<div class="note-small color-FF2C2C" v-if="!$v.form.certificate_name.required">Required</div>
								<div class="note-small color-FF2C2C" v-if="!$v.form.certificate_name.maxLength">Max of {{ $v.form.certificate_name.$params.maxLength.max }} characters.</div>
							</div>
						</div>
						<div class="col-sm-12 p-2">
							<el-input placeholder="Email Address *" v-model="$v.form.email.$model"></el-input>
							<div v-if="$v.form.email.$dirty">
								<div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required</div>
								<div class="note-small color-FF2C2C" v-if="!$v.form.email.email">Must be valid</div>
								<div class="note-small color-FF2C2C" v-if="!$v.form.email.maxLength">Max of {{ $v.form.email.$params.maxLength.max }} characters.</div>
							</div>
						</div>
						<div class="col-sm-12 p-2">
							<el-input name="password" type="password" placeholder="Password *" v-model="$v.form.password.$model" show-password></el-input>
							<div v-if="$v.form.password.$dirty">
								<div class="note-small color-FF2C2C" v-if="!$v.form.password.required">Required</div>
								<div class="note-small color-FF2C2C" v-if="!$v.form.password.maxLength">Max of {{ $v.form.password.$params.maxLength.max }} characters.</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.password.strongPassword">Strong passwords need to have a capital letter and a small letter, a number, a special character, and be more than 8 characters long.</div>
							</div>
						</div>
						<div class="col-sm-12 p-2">
							<el-input placeholder="Confirm Password *" v-model="$v.form.confirm_password.$model" show-password></el-input>
							<div v-if="$v.form.confirm_password.$dirty">
								<div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.required">Required</div>
								<div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.sameAsPassword">Passwords do not match</div>
							</div>
						</div>
						<div class="col-sm-12 p-2">
							<el-input class="text-uppercase" disabled placeholder="Philippines" v-model="$v.form.country.$model" />

						</div>
                        <div class="col-sm-12 p-2">
							<el-input placeholder="PRC Number *" v-model="$v.form.prc_number.$model" ></el-input>
                            <div v-if="$v.form.prc_number.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.prc_number.required">Required</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.prc_number.maxLength">Max of {{ $v.form.prc_number.$params.maxLength.max }} characters.</div>
                            </div>
						</div>

						<div class="col-sm-12 p-2">
							<el-input placeholder="Institution/Organization" v-model="$v.form.institution_organization.$model"></el-input>
                            <div v-if="$v.form.institution_organization.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.institution_organization.maxLength">Max of {{ $v.form.institution_organization.$params.maxLength.max }} characters.</div>
                            </div>
						</div>
						<div class="p-2">
							<p>By clicking <b>Register Now</b> below, I certify that the above information is true and correct.</p>
							<p>Under RA 10173 of the Republic of the Philippines, all personal information collected , stored and processed by Ideahub IT Solutions Provider, Inc. shall be duty bound to observe and respect your privacy rights.</p>
						</div>
					</form>
				</div>
				<div class="container text-center mt-5">
                    <button @click="goToStep(14)" class="btn-blue-round btn-small">Back</button>
					<button @click="recheckInputs()" class="btn-blue-round btn-small">Register Now!</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { required, maxLength, email, sameAs } from 'vuelidate/lib/validators/';
import { createFormData } from "~/components/Helper/functions.js"
export default {
    layout: 'registrationLayout',
    data() {
        return {
            form: {
				last_name: this.$store.state.registration.last_name,
				first_name: this.$store.state.registration.first_name,
				middle_name: this.$store.state.registration.middle_name,
				suffix: this.$store.state.registration.suffix,
				prof_suffix: this.$store.state.registration.prof_suffix,
				certificate_name: this.$store.state.registration.certificate_name,

				email: null,
				password: this.$store.state.registration.password,
				confirm_password: this.$store.state.registration.confirm_password,

				country: this.$store.state.registration.country,

				prc_number: this.$store.state.registration.prc_number,
				resident_certificate: this.$store.state.registration.resident_certificate,
				institution_organization: this.$store.state.registration.institution_organization,
				is_pds: false,
				member_type: 3,
				scope: !this.$store.state.registration.scope,
				role: this.$store.state.registration.role,
			},

			error_already_registered: this.$store.state.registration.error_already_registered,
        };
    },
	validations: {
        form: {
			last_name: {
                required,
                maxLength: maxLength(255)
            },
            first_name: {
                required,
                maxLength: maxLength(255)
            },
            middle_name: {
                maxLength: maxLength(255)
            },
			suffix: {
                maxLength: maxLength(255)
            },
            prof_suffix: {
                maxLength: maxLength(255)
            },
            certificate_name: {
                required,
                maxLength: maxLength(255)
            },
            email: {
                required,
                email,
                maxLength: maxLength(255)
            },
			password: {
                required,
                maxLength: maxLength(150),
                strongPassword(password1) {
                    return (
                        /[a-z]/.test(password1) &&
                        /[0-9]/.test(password1) &&
                        /\W|_/.test(password1) &&
                        password1.length >= 8
                    );
                }
            },
            confirm_password: {
                required,
                sameAsPassword: sameAs("password")
            },
            country: {
                required,
            },
            prc_number: {
                required,
                maxLength: maxLength(255)
            },
            institution_organization: {
                maxLength: maxLength(255)
            },
        }
    },
    methods: {
        goToStep(step) {
            this.$parent.goToStep(step);
        },
        recheckInputs() {
            this.$v.form.$touch();
            if (this.$v.form.$invalid) {
                this.$message.error("Please fill in the required fields.");
            } else {
                this.register();
            }
        },
        register() {
            let properties = Object.keys(this.form)
            let form = createFormData(this.form, properties)
            form.set('role', this.form.role )
            form.set('member_type', this.form.member_type )
            form.set('is_pds', parseInt(0))
            form.set('scope', parseInt(0))
            
            this.$store.dispatch("registration/register", form)
            .then(res => {
                let data = res.data.data
                console.log('Registration Response', res)

                if(typeof data === 'undefined') {
					this.$message.error("Unable to proceed with registration, please contact the ASD registration committee.")
				}

                console.log('Registration Data', data.order)
                console.log('Order ID')

                let rate_info = {
                    registration_fee: data.order.registration_fee,
                    ideapay_fee: data.order.convenience_fee,
                    total_amount: data.order.total_amount,
                }

                this.$store.commit("registration/SET_RATE_INFO", rate_info);
                this.$store.commit("registration/SET_ORDER_ID", data.order);
                this.$store.commit("registration/SET_REGISTRATION_INFO", this.form);

                this.goToStep(18);
            })
            .catch(err => {
                console.error(err)

				let err_message = err.message
				let err_message_body = err.message_body

				if(typeof err_message_body !== 'undefined') {
					err_message = this.error_already_registered
				}

				this.$confirm (err_message, {
					dangerouslyUseHTMLString: true,
					confirmButtonText: 'Close',
					type: 'warning',
					showCancelButton: false
				});
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
	.form-section{
		width: 80%;
	    border: 1px solid lightgray;
	    border-radius: 10px;
	    margin: 0 auto;
	    padding: 30px;
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
	@media(max-width: 767px){
		.form-section{
			width: 100%;
			padding: 10px;
		}
		.btn-blue-round{
			width: 75%;
		}
		.btn-small{
			width: 130px;
			font-size: 18px;
			padding: .5em;
		}
	}
</style>