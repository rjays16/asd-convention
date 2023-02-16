<template>
    <div class="modal fade" id="forgotPassword" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close upper-right-close btn-close corner-circle" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="head py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <h4 class="text-uppercase text-center mb-3 col-12">Reset Password</h4>
                                <form @submit.prevent>
                                    <div class="row">
                                        <div class="form-group col-lg-12 text-left">
                                            <label>Email Address</label>
                                            <el-input v-model="$v.form.email.$model" placeholder="Email Address" class="pr-2" />
                                            <div v-if="$v.form.email.$dirty">
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required Field</div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="text-center">
                                    <button type="button" class="btn btn-green-play btn-send mt-2 corner-pill text-uppercase" @click="recheckInputs">
                                        Send 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { disableButton } from "~/components/Helper/functions.js"
export default {
    data() {
        return {
            form: {
                email: null,
            }
        };
    },
    validations: {
        form: {
            email: {
                required
            }
        },
    },
    methods: {
        recheckInputs() {
            this.$v.$touch()
            if(this.$v.$invalid) {
                this.$message.error("Please fill in the required fields.")
            } else {
                this.sendRequest()
            }
        },
        sendRequest() {
            disableButton('.btn-send', true)
            this.$store.dispatch("auth/sendPasswordResetRequest", this.form)
            .then((res) => {
                this.$message.success("Successfully sent request. Please check your email.")
                $('.btn-close').click()
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                disableButton('.btn-send', false)
            })
            .catch((err) => {
                this.$message.error(err)
                disableButton('.btn-send', false)
            });
        }
    },
}
</script>