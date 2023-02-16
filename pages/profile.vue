<template>
	<section id="profile">
        <RegistrationHeader />
		<Breadcrumb :page_title="$route.name" />

        <div class="container-md mt-4 mb-5">
            <div class="row">
                <div class="col-lg-5">
                    <el-card class="box-card profile-card member-info mt-2 opensans">
                        <div class="sec-personal-info">
                            <p class="mb-1 fw-bold">First Name</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.first_name.$model" @input="form.first_name = toUpper($event)" placeholder="First Name" />
                            <div v-if="$v.form.first_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.required">Required Field</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.maxLength">Max of {{ $v.form.first_name.$params.maxLength.max }} characters.</div>
                            </div>

                            <p class="mb-1 fw-bold">Middle Initial</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.middle_name.$model" @input="form.middle_name = toUpper($event)" placeholder="Middle Name" />
                            <div v-if="$v.form.middle_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.middle_name.maxLength">Max of {{ $v.form.middle_name.$params.maxLength.max }} characters.</div>
                            </div>

                            <p class="mb-1 fw-bold">Last Name</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.last_name.$model" @input="form.last_name = toUpper($event)" placeholder="Last Name" />
                            <div v-if="$v.form.last_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.required">Required Field</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.maxLength">Max of {{ $v.form.last_name.$params.maxLength.max }} characters.</div>
                            </div>
                        </div>
                        <el-collapse accordion class="mt-3">
                            <el-collapse-item>
                                <template slot="title">
                                    <div class="accordion-title">
                                        <p class="fw-bold">Personal Information</p>
                                        <i class="el-icon-info" aria-hidden="true"></i>
                                    </div>
                                </template>

                                <div class="sec-personal-info">
                                    <p class="mb-1 fw-bold">Email</p>
                                    <el-input class="mb-3" disabled v-model="form.email" placeholder="Email" />

                                    <p class="mb-1 fw-bold">PRC Number</p>
                                    <el-input class="mb-3" v-model="form.prc_number" placeholder="PRC Number" />

                                    <p class="mb-1 fw-bold">PDS Number</p>
                                    <el-input class="mb-3" v-model="form.pds_number" placeholder="PDS Number" />

                                    <p class="mb-1 fw-bold">Country</p>
                                    <country-select v-model="$v.form.country.$model" :country="$v.form.country.$model"
                                        className="country-select form-control" :countryName="true" placeholder="Country" />
                                    <div v-if="$v.form.country.$dirty">
                                        <div class="note-small color-FF2C2C" v-if="!$v.form.country.required">Required Field</div>
                                    </div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                        <div class="sec-profile-register mt-4 text-center"  v-show="form.type===1?false:true">
                            <button @click="recheckInputs()" class="btn btn-blue btn-update-profile px-4 avenir-medium corner-pill fs-6">
                                Update
                            </button>
                        </div>
                    </el-card>
                </div>
                <div class="col-lg-7">
                    <el-card class="box-card profile-card w-100 mt-2 mb-4">
                        <div class="text-center mt-2">
                            <h3 class="avenir-bold">Your Fees</h3>
                            <div class="row">
                                <b-table
                                    hover
                                    :items="orders"
                                    :fields="fields"
                                    :per-page="perPage"
                                    :current-page="currentPage"
                                    :responsive="true"
                                    :busy="isBusy"
                                    class="m-2"
                                    striped
                                    :show-empty="rows == 0">
                                    <template slot="table-busy">
                                        <div class="text-center text-success my-2">
                                            <b-spinner class="align-middle"></b-spinner>
                                            <strong>Loading...</strong>
                                        </div>
                                    </template>
                                    <template #empty>
                                        <div class="text-center">
                                            No orders found.
                                        </div>
                                    </template>
                                    <template v-slot:cell(description)>
                                        Total Summary Charge
                                    </template>
                                    <template v-slot:cell(amount)="row">
                                        {{ form.scope ? row.item.currency_usd : row.item.currency_php }} {{ form.scope ? formatDecimal(row.item.intl_amount, 2) : formatDecimal(row.item.amount - row.item.convenience_fee, 2) }}
                                    </template>
                                     <template v-slot:cell(conv_fee)="row">
                                        {{ form.scope ? row.item.currency_usd : row.item.currency_php }} {{ formatDecimal(row.item.convenience_fee, 2) }}
                                    </template>
                                    <template v-slot:cell(action)="row">
                                        <div class="text-center">
                                            <div v-if="row.item.status === 3">
                                                <button class="btn btn-orange corner-pill mt-2" @click="payOrder(row.item.id)">
                                                    Previous Payment Failed. Click here to try again.
                                                </button>
                                            </div>
                                            <div v-else-if="row.item.status == 2 || (row.item.payment && row.item.payment.length)">
                                                <p class="mb-0">
                                                    Paid
                                                </p>
                                            </div>
                                            <div v-else>
                                                <button class="btn btn-blue corner-pill mt-2" @click="payOrder(row.item.id)">
                                                    Pay Balance
                                                </button>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-slot:cell(total_amount)="row">
                                        {{ form.scope ? row.item.currency_usd : row.item.currency_php }} {{ form.scope ? formatDecimal(row.item.intl_amount, 2) : formatDecimal(row.item.amount, 2) }}
                                    </template>
                                </b-table>
                                <div class="w-100 m-2" v-if="rows > 5">
                                    <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        class="float-right blue-pagination"
                                        prev-text="Previous"
                                        next-text="Next"
                                        first-number
                                        last-number
                                    ></b-pagination>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="box-card profile-card w-100 mt-2 mb-5">
                        <div class="text-center mt-2 sec-fees-info">
                            <h3 class="avenir-bold">Your Abstracts</h3>
                            <p class="mb-0">
                                You can only view submitted abstracts where you are the submitting author. For the complete guidelines on abstracts submission, click
                                <a href="/abstract-guidelines" target="_blank" class="text-dark">here</a>.
                            </p>

                            <div class="row mb-2">
                                <b-table
                                    hover
                                    :items="abstracts"
                                    :fields="abstFields"
                                    :per-page="abstPerPage"
                                    :current-page="abstCurrentPage"
                                    :responsive="true"
                                    :busy="abstIsBusy"
                                    class="m-2"
                                    striped
                                    :show-empty="abstRows == 0">
                                    <template slot="table-busy">
                                        <div class="text-center text-success my-2">
                                            <b-spinner class="align-middle"></b-spinner>
                                            <strong>Loading...</strong>
                                        </div>
                                    </template>
                                    <template #empty>
                                        <div class="text-center">
                                            No abstract submissions yet.
                                        </div>
                                    </template>                                    
                                    <template v-slot:cell(authors)>
                                        <div v-for="author in list_of_authors" :key="author.id">
                                        {{author.last_name}}, {{author.first_name}}
                                        </div>
                                    </template>
                                    <template v-slot:cell(created_at)="row">
                                        {{ new Date(row.item.created_at) | moment("MMMM D, YYYY") }}
                                    </template>
                                    <template v-slot:cell(actions)="row">
                                        <div class="actions same-size text-center">
                                            <a class="dmsans-bold fw-bold link-dark clickable" @click="openAbstractModal(row.item.id)">
                                                VIEW
                                            </a>
                                        </div>
                                    </template>
                                </b-table>
                                <div class="w-100 m-2" v-if="abstRows > 5">
                                    <b-pagination
                                        v-model="abstCurrentPage"
                                        :total-rows="abstRows"
                                        :per-page="abstPerPage"
                                        class="float-right blue-pagination"
                                        prev-text="Previous"
                                        next-text="Next"
                                        first-number
                                        last-number
                                    ></b-pagination>
                                </div>
                            </div>

                            <div class="row text-center">
                                <div>
                                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px opensans w-50 btn-submit-abstract" @click="$router.push('/abstract')"
                                         v-if="form.paid_check === 2">Submit an Abstract
                                    </button>
                                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px opensans w-50 btn-submit-abstract" @click="promptAbstractSubmissionError()"
                                          v-else>Submit an Abstract
                                    </button>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>

            <ModalsAbstractGuidelines />
            <ModalsAbstractPreview ref="AbstractPreviewModal"/>
        </div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import { required, maxLength, requiredIf } from "vuelidate/lib/validators/";
import { formatDecimal, disableButton, toUpper } from "~/components/Helper/functions.js";

export default {
	layout: "home",
	middleware: "auth",
	data() {
		return {
			form: {
				id: null,
                member_id: null,
                paid_check: 0,
				first_name: null,
				middle_name: null,
				last_name: null,
                certificate_name: null,
                full_name: null,
                prof_suffix: null,
                suffix: null,

                pds_number: null,
                prc_number: null,

                resident_certificate: null,
                training_institution: null,

                member_type: null,
                is_pds: false,
                scope: false,
			},

            // Start of Orders (Fees) table vars
			fields: [
				{ key: 'description', label: 'Description', tdClass: "align-middle" },
				{ key: 'amount', label: 'Amount', tdClass: "align-middle" },
				// { key: 'raw_order_payments', label: 'Total Payment', tdClass: "align-middle" },
				{ key: 'conv_fee', label: 'Convenience Fee', tdClass: "align-middle" },
				{ key: 'total_amount', label: 'Total Payment', tdClass: "align-middle" },
				{ key: 'action', label: 'Status', thClass: "text-center", tdClass: "align-middle" },
			],

			currentPage: 1,
			perPage: 10,
			orderCriteria: '',
            orderFilterTimeout: null,
			isBusy: false,
            // End of Orders (Fees) table vars

            // Start of Abstract table vars
            abstFields: [
				{ key: 'title', label: 'Title', tdClass: "align-middle" },
				{ key: 'authors', label: 'Author/s', tdClass: "align-middle" },
				{ key: 'created_at', label: 'Date Submitted', tdClass: "align-middle" },
				{ key: 'actions', label: 'Action', thClass: "text-center", tdClass: "align-middle" },
			],

			abstCurrentPage: 1,
			abstPerPage: 10,
			abstIsBusy: false,
            // End of Abstract table vars

			img_url: "",
            img_url_change: false,
            img_url_deleted: false,
            image_types: ["image/png", "image/jpg", "image/jpeg"],
            file_max: 10000000,
		};
	},
	validations: {
		form: {
			first_name: {
				required,
				maxLength: maxLength(191)
			},
			middle_name: {
				maxLength: maxLength(191)
			},
			last_name: {
				required,
				maxLength: maxLength(191)
			},
			country: {
				required
			},
		},
	},
	computed: {
		...mapGetters({
            orders: 'members/getOrders',
            abstracts: 'members/getAbstract',
        }),
		rows() {
			return this.orders.length
		},
        abstRows() {
            return this.abstracts.length
        }
	},
	methods: {
        formatDecimal(value, places) {
            return formatDecimal(value, places);
        },
		getUser() {
			this.$store.dispatch("auth/getUser")
            .then(res => {
                let user_data = res.data
                let member_data = res.data.member
				this.form.id = user_data.id
				this.form.email = user_data.email
				this.form.full_name = user_data.full_name
				this.form.first_name = user_data.first_name
				this.form.last_name = user_data.last_name
                this.form.middle_name = user_data.middle_name
                this.form.prof_suffix = user_data.prof_suffix
                this.form.suffix = user_data.suffix

                this.form.country = user_data.country
                this.form.status = user_data.status

                this.form.member_id = member_data.id
                this.form.member_type = member_data.member_type
                this.form.scope = member_data.scope
                this.form.prc_number = member_data.prc_number
                this.form.pds_number = member_data.pds_number

                this.getAbstracts()
                this.getOrders()
            })
            .catch(err => {
                this.$message.error(err)
            })
		},
		payOrder(id) {
			let data = {
				order_id: id
			}

            this.$store.dispatch("members/createIdeapay", data)
            .then(res => {
                window.open(res.data.payment_url, '_blank')

				this.$alert('In case the Payment Portal does not open in a new tab, you can use this link: <a href='+res.data.payment_url+'>Pay Now</a>',
					'Info', {
					dangerouslyUseHTMLString: true,
					showCancelButton: true,
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
				})
            })
            .catch(err => {
                console.error(err)
                this.$message.error(err)
            });
		},
		recheckInputs() {
			this.$v.$touch()
			if(this.$v.$invalid) {
                this.$message.error("Please fill in the required fields.")
            } else {
	            this.updateProfile()
            }
		},
		updateProfile() {
			disableButton('.btn-update-profile', true)
            this.$store.dispatch("members/update", this.form)
            .then(res => {
				this.$message.success(res.data.message)
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch(err => {
                this.$message.error(err)
				disableButton('.btn-update-profile', false)
            });
		},
		getOrders() {
            // console.log(this.form)
			this.$store.dispatch("members/getOrders", this.form.member_id)
            .then(res => {
                this.form.paid_check = res.data[0].status;
            })
            .catch(err => {
				console.error(err)
            })
		},
		toUpper(value) {
			return toUpper(value)
		},
        promptAbstractSubmissionError() {
            this.$message.error("Sorry, but your account is not yet eligible to submit for an abstract. Please complete your payment to update your registration status.")
        },
        getAbstracts() {
            this.$store.dispatch("members/getAbstracts", this.form.member_id)
            .catch(err => {
				console.error(err)
            })
        },
        getAbstract() {
		    this.$store.dispatch("members/getAbstract", this.form.member_id)
            .then(res => {
                this.list_of_authors = res.data.authors;
            })
            .catch(err => {
				console.error(err)
            })
        },
        openAbstractModal(abstract_id) {
            this.$refs.AbstractPreviewModal.openModal(abstract_id, true);
        }
	},
	mounted() {
		this.getUser()
	}
};
</script>

<style lang="scss" scoped>
#profile {
	.member-info {
		.fw-bold {
			font-size: 13px;
			margin-bottom: 5px;
		}
	}
	.profile-card {
		h1 {
			font-size: 24px;
			text-align: center;
		}
		.el-input.is-disabled .el-input__inner,
		.el-textarea.is-disabled .el-textarea__inner {
			background-color: #fff;
			border-color: #c0c4cc;
			color: #606266;
		}
	}
	.accordion-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding-right: 1em;
		align-items: center;
		p {
			margin:0px;
		}
		&:hover {
			color: #409eff;
		}
	}

	@media only screen and (max-width: 475px) {
		.el-select-dropdown {
			&.el-popper {
				max-width: 320px;
				.el-select-dropdown__item {
					span {
						white-space: normal;
					}
				}
			}
		}
	}
}
</style>
