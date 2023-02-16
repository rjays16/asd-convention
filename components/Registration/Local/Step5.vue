<template>
	<div class="container" id="step-5">
		<h2 class="dmsans-bold text-center">Please upload a letter from your training officer/department chief confirming that you are indeed a resident/fellow.</h2>
		<div class="inner-content">
			<div class="row mt-5 mb-2">
				<div class="col-lg-5 col-md-12 demo-block demo-en-US demo-upload text-end">
					<el-upload
						class="avatar-uploader"
						action="/"
						accept="image/png, image/jpeg, image/jpg"
						:auto-upload="false"
						:show-file-list="false"
						:on-change="onChangeImage">
						<img v-if="img_url || form.resident_certificate" :src="img_url || form.resident_certificate" class="img img-fluid" />
						<img v-else src="~/static/assets/images/upload.png" class="img img-fluid">
					</el-upload>
				</div>
				<div class="col-lg-7 col-md-12 dmsans-regular d-table">
					<div class="d-table-cell align-middle">
						<h4>
							For Residents
						</h4>
						<h4>
							Upload certificate from Institution Chair or ID
						</h4>
						<p>
							<ul class="note">
								<li class="mb-2"><b>Only .PNG and .JPEG format allowed</b></li>
								<li><b>Max. of 50 MB</b></li>
							</ul>
						</p>
					</div>
				</div>
			</div>
			<div class="form-group row">
				<div class="col-12">

				</div>
			</div>
			<div class="container text-center mt-3">
				<button @click="goToStep(11)" class="btn-blue-round btn-small">Back</button>
				<button @click="recheckInputs()" class="btn-blue-round btn-small btn-upload-proceed">Proceed</button>
			</div>
		</div>
	</div>
</template>

<script>
import { required } from 'vuelidate/lib/validators/';
export default{
	layout: 'registrationLayout',
	data(){
		return {
			form: {
				resident_certificate: null,
			},
			image_types: ["image/png", "image/jpg", "image/jpeg"],
			file_max: 10000000,
			img_url: null,
			img_url_change: false,
			img_url_deleted: false,
			hasFile: false,
		}
	},
	validations: {
		form: {
			resident_certificate: {
				required
			},
		}
	},
	methods:{
		goToStep(step) {
			this.$parent.goToStep(step);
		},
		onChangeImage(file) {
			this.validateFile(file.raw, "photo", (result) => {
				if (result == true) {
					// console.log(this.form.resident_certificate, file.raw)
					this.form.resident_certificate = file.raw;
					this.img_url = URL.createObjectURL(file.raw);
					this.img_url_change = true;
					this.hasFile = true;
				}
			});
		},
		validateFile(file, type, callback) {
			let valid_types = this.image_types;
			const is_larger_than_max = file.size / 1024 / 1024 < 50;

			if (!file) {
				callback(false);
			} else if (!is_larger_than_max) {
				this.$message.error("File is too big!");
				callback(false);
			} else if (!valid_types.includes(file.type)) {
				this.$message.error("Invalid file type");
				callback(false);
			} else {
				callback(true);
			}
		},
		recheckInputs() {
			if(!this.form.resident_certificate) {
				this.$message.error("Please upload your resident certificate.");
			} else {
				this.$store.commit("registration/SET_RESIDENT_CERTIFICATE", this.form.resident_certificate);
				this.$parent.goToStep(17)
			}
		},
		mounted() {
			this.form.resident_certificate = null
			this.mg_url = null
			this.img_url_change =  false
			this.img_url_deleted = false
			this.hasFile = false
		}
	}
}
</script>

<style scoped>
.img-fluid{
	padding: 1em;
	border: 3px dashed #030C4C;
	border-radius: 5px;
	width: 180px;
    height: 200px;
}
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
.note{
    color:red;
    font-size: 20px;
}

@media(max-width: 490px){
	.upload-sect{
		width: 330px;
	}
}
@media only screen and (max-width: 767px) {
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