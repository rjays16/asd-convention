<template>
    <div class="modal fade" id="editPassword" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <button type="button" class="close upper-right-close corner-circle" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="head py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <h4 class="text-uppercase text-center mb-3 col-12">Change Password</h4>
                                <form autocomplete="off">
                                    <div class="row">
                                        <div class="form-group col-lg-12">
                                            <label>Current Password</label>
                                            <el-input v-model="$v.form.current_password.$model" placeholder="Current Password" type="password" autocomplete="new-password" show-password />
                                            <div v-if="$v.form.current_password.$dirty">
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.current_password.required">Required Field</div>
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.current_password.maxLength">Max of {{ $v.form.current_password.$params.maxLength.max }} characters.</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-12">
                                            <label>New Password</label>
                                            <el-input v-model="$v.form.password.$model" placeholder="New Password" type="password" autocomplete="new-password" show-password />
                                            <div v-if="$v.form.password.$dirty">
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.password.required">Required Field</div>
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.password.minLength">Min of {{ $v.form.password.$params.minLength.min }} characters.</div>
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.password.maxLength">Max of {{ $v.form.password.$params.maxLength.max }} characters.</div>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-12">
                                            <label>Confirm Password</label>
                                            <el-input v-model="$v.form.confirm_password.$model" placeholder="Confirm Password" type="password" autocomplete="new-password" show-password />
                                            <div v-if="$v.form.confirm_password.$dirty">
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.required">Required Field</div>
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.minLength">Min of {{ $v.form.confirm_password.$params.minLength.min }} characters.</div>
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.maxLength">Max of {{ $v.form.confirm_password.$params.maxLength.max }} characters.</div>
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.sameAsPassword">New and confirm password must be identical</div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="text-center">
                                    <button type="button" class="btn btn-green-play mt-2 corner-pill text-uppercase" @click="recheckInputs">
                                        Update 
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
import { required, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            form: {
                password: null,
                current_password: null,
                confirm_password: null,
            }
        };
    },
    validations: {
        form: {
            password: {
                required,
                minLength: minLength(7),
                maxLength: maxLength(150)
            },
            current_password: {
                required,
                maxLength: maxLength(150)
            },
            confirm_password: {
                required,
                minLength: minLength(7),
                maxLength: maxLength(150),
                sameAsPassword: sameAs('password')
            },
        },
    },
    methods: {
        recheckInputs() {
            this.$v.form.$touch()
            if(this.$v.form.$invalid) {
                this.$message.error("Please fill in the required fields.")
            } else {
                this.save()
            }
        },
        save() {
            this.$store.dispatch("auth/updatePassword", this.form)
            .then((res) => {
                this.$message.success(res.data.message)
                $('#editPassword').modal('hide')
            })
            .catch((err) => {
                this.$message.error(err.response.data.message)
            })
        },
    },
}
</script>