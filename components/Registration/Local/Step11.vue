<template>
	<div id="step-7">
		<div class="container">
			<h3 class="dmsans-regular text-center"><b>Please review your registration details</b></h3>
			<div class="inner-content dmsans-regular ">
				<div class="table-responsive">
					<table class="table">
						<tbody>
							<tr>
								<td class="tr">Registration type</td>
								<td><b>International Resident / Fellow</b></td>
							</tr>
							<tr>
								<td class="tr">Last Name</td>
								<td>{{ last_name }}</td>
							</tr>
							<tr>
								<td class="tr">First Name</td>
								<td>{{ first_name }}</td>
							</tr>
							<tr>
								<td class="tr">Middle Name</td>
								<td>{{ middle_name }}</td>
							</tr>
							<tr>
								<td class="tr">Suffix Name</td>
								<td>{{ suffix }}</td>
							</tr>
							<tr>
								<td class="tr">Professional Suffix</td>
								<td>{{ prof_suffix }}</td>
							</tr>
							<tr>
								<td class="tr">Name to Appear in Certificate</td>
								<td>{{ certificate_name }}</td>
							</tr>
							<tr>
								<td class="tr">Email Address</td>
								<td>{{ email }}</td>
							</tr>
							<tr>
								<td class="tr">Country</td>
								<td>{{ country }}</td>
							</tr>
							<tr>
								<td class="tr">PRC Number</td>
								<td>{{ prc_number }}</td>
							</tr>
							<tr>
								<td class="tr">Institution/Organization</td>
								<td>{{ institution_organization }}</td>
							</tr>
							<tr>
								<td class="tr">Registration Fee</td>
								<td>{{ registration_fee }}</td>
							</tr>
							<tr>
								<td class="tr">Convience Fee</td>
								<td>{{ convenience_fee }}</td>
							</tr>
							<tr>
								<td class="tr">Total Amount to Pay (USD)</td>
								<td>{{ total_amount }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<br><br>
				<h4 class="text-center">Payment Terms and Conditions</h4>
				<br>
				<b>CANCELLATION</b>
				<ul>
					<li>All cancellations must be notified in writing (by email) to the Registration Committee at registration@asdmeeting2022.com</li>
					<li>The following rules will apply:
						<ul>
							<li>Cancellations received in writing by September 24, 2022 are entitled to a 100% refund.</li>
							<li>Cancellation received in writing between September 24 and October 9, 2022 are entitled to a 50% refund.</li>
							<li>Cancellation received from October 10, 2022 - no refunds.</li>
							<li>All refunds will be made within 3 months after the end of the event. Request submitted after this period will not be considered.</li>
							<li>If you first registered as an individual and subsequently received sponsorship from industry or company, you will not be entitled to a refund.</li>
							<li>Applicable bank charges will be applied.</li>
						</ul>
					</li>
				</ul>
				<br>
				<p class="text-justify">By clicking on "Proceed to Payment" below, I acknowledged that I have reviewed my registration details and that everything is true and correct to the best of my knowledge. I also express full agreement to the Payment Terms and Conditions enumerated above.</p>
				<div class="container text-center mt-5 d-flex justify-content-evenly">
					<button  @click="proceedToIdeapay()" class="btn-small">Proceed to Payment</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default{
	layout: 'registrationLayout',
	computed: {
		...mapState({
			first_name: (state) => state.registration.first_name,
			last_name: (state) => state.registration.last_name,
			middle_name: (state) => state.registration.middle_name,
			suffix: (state) => state.registration.suffix,
			prof_suffix: (state) => state.registration.prof_suffix,
			certificate_name: (state) => state.registration.certificate_name,

			email: (state) => state.registration.email,
			password: (state) => state.registration.password,

			country: (state) => state.registration.country,
			role: (state) => state.registration.role,

			prc_number: (state) => state.registration.prc_number,

			resident_certificate: (state) => state.registration.resident_certificate,
			institution_organization: (state) => state.registration.institution_organization,

			total_amount: (state) => state.registration.total_amount,
			registration_fee: (state) => state.registration.registration_fee,
			convenience_fee: (state) => state.registration.ideapay_fee,

			order_id: (state) => state.registration.order_id,
			user_id: (state) => state.registration.user_id
		}),
	},
    methods: {
		proceedToIdeapay() {
            if(this.order_id && !this.is_free) {
                let data = {
                    order_id: this.order_id
                }
                this.$store.dispatch("registration/createIdeapay", data)
                .then(res => {
                    window.location.replace(res.data.payment_url)
                })
                .catch(err => {
                    console.error(err)
                    this.$message.error(err)
                });
            } else {
                this.$message.error("Unable to proceed with your registration. Please contact the site admin")
            }
		},
	}
}
</script>
<style scoped>
.btn-small{
	width: 30%;
	background: #030C4C;
	border-radius: 22px;
	font-size: 25px;
	color: white;
	border: none;
	padding: 10px;
}
.table{
	width: 70%;
	margin: 0 auto;
	font-size: 22px;
}
.table tr:first-child{
	background: rgba(0, 0, 0, 0.05);
}
@media only screen and (max-width: 767px) {
	.btn-small{
		width: 75%;
		font-size: 18px;
		padding: .5em;
	}
}
@media only screen and (min-width: 768px) and (max-width: 1030px) {
    .btn-small{
        width: 40%;
        font-size:22px;
    }
}
</style>
