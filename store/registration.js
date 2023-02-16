export const state = () => ({
    first_name: null,
    middle_name: null,
    last_name: null,
    certificate_name: null,
    suffix: null,
    prof_suffix: null,

    email: null,
    password: null,
    confirm_password: null,

    country: "Philippines",

    prc_number: null,
    is_pds: false,
    pds_number: null,
    scope: true,
    role: 3,

    resident_certificate: null,
    institution_organization: null,

    ideapay_fee: null,
    total_amount: null,
    registration_fee: null,

    order_id: null,
    user_id: null,
    member_type: null,

    error_already_registered: `This account has already been registered.<br/><br/>
    No Worries! <b>You login using the email & password you have previously set.</b> If you have forgotten your password, please reset your password on the <a href="/login">login page</a>.<br /><br />
    If your issue is not mentioned above, please contact our technical support at registration@asdmeeting2022.com, expect a 24-48 hour turn around.`
});

export const mutations = {
    SET_REGISTRATION_INFO(state, data) {
        state.first_name = data.first_name
        state.middle_name = data.middle_name
        state.last_name = data.last_name
        state.certificate_name = data.certificate_name
        state.suffix = data.suffix
        state.prof_suffix = data.prof_suffix

        state.email = data.email
        state.password = data.password
        state.confirm_password = data.confirm_password

        state.country = data.country

        state.pds_number = data.pds_number ? data.pds_number : null
        state.prc_number = data.prc_number
        state.institution_organization = data.institution_organization

        state.user_id = data.user_id
	},
    SET_PARTIAL_FORM_INFO(state, data) {
        state.first_name = data.user.first_name
        state.middle_name = data.user.middle_name
        state.last_name = data.user.last_name
        state.suffix = data.user.suffix
        state.prof_suffix = data.user.prof_suffix
        state.role = data.user.role
        state.email = data.email ? data.email : null
        state.pds_number = data.pds_number ?  data.pds_number : null
        state.member_type = data.user.member_type
    },
    SET_ORDER_ID(state, data) {
        state.order_id = data.order_id
	},
    SET_IS_PDS(state, data) {
        state.is_pds = data.is_pds
	},
    SET_RESIDENT_CERTIFICATE(state, data) {
        state.resident_certificate = data.resident_certificate
	},
    SET_RATE_INFO(state, data) {
        state.registration_fee = data.registration_fee;
		state.ideapay_fee = data.ideapay_fee;
		state.total_amount = data.total_amount;
	},
    SET_RESIDENT_CERTIFICATE(state, data) {
        state.resident_certificate = data
        console.log("Resident Certificate: ", state.resident_certificate)
    },
    RESET_FORM(state) {
        state.first_name = null,
        state.middle_name = null,
        state.last_name = null,
        state.certificate_name = null,
        state.suffix = null,
        state.prof_suffix = null,

        state.email = null,
        state.password = null,
        state.confirm_password = null,

        state.country = "Philippines",
        state.role = 3,
        state.prc_number = null,
        state.pds_number = null,
        state.scope = true,
        state.member_type = null,

        state.is_pds = false,
        state.institution_organization = null,
        state.ideapay_fee = null,
        state.total_amount = null,
        state.registration_fee = null,
        state.order_id = null,
        state.user_id = null
    }
};

export const actions = {
    register({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/delegate', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data)
            })
        })
    },
    calculate({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/calculate', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    validateEmail({}, data){
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/delegate/validate-email', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    validatePDSNumber({}, data){
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/delegate/validate-pds-number', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    createIdeapay({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/payment/ideapay', data )
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
};