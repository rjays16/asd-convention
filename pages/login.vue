<template>
    <section id="container-login-form" class="d-flex justify-content-between dmsans-regular" >

            <div class="row col-sm-12 col-md-4 d-flex justify-content-center px-3 mx-auto mt-5">
                <div class="text-center d-flex flex-column justify-content-center">
                    <h2 class="dmsans-bold text-uppercase py-2">Welcome</h2>
                    <p>Login using your registered account below</p>
                </div>
                <form >
                    <div class="col-sm-12 mb-3 ">
                        <label class="form__label">Email Address</label>
                        <el-input class="round-input"
                            placeholder="example@gmail.com"
                            @keyup.enter="recheckInputs"
                            v-model="$v.email.$model">
                        </el-input>
                    </div>
                    <div class="col-sm-12 mb-3 ">
                        <label class="form__label">Password</label>
                        <el-input type="Password*"
                            placeholder="Password*"
                            @keyup.enter="recheckInputs"
                            v-model="$v.password.$model"
                            show-password>
                        </el-input>
                    </div>
                    <div class="row d-flex">
                        <div class="col-md-6">
                            <el-checkbox v-model="checked">Remember me</el-checkbox>
                        </div>
                        <div class="col-md-6 text-end">
                            <p><a href="#" tabindex="-1"
                                data-toggle="modal"
                                data-target="#password-request-reset">
                                Reset Password?
                            </a></p>
                        </div>
                    </div>
                    <el-button class="w-100 bg-blue"
                        type="primary"
                        @click="recheckInputs()"
                        :loading="signing_in">
                        Log in
                    </el-button>
                    <p class="mt-3 text-center">
                        Don’t have account yet?
                        <a v-bind:href="('/registration')">Register</a>
                    </p>
                </form>
                <ModalsRequestReset />
            </div>
            <div class="row col-md-8 d-none d-sm-none d-md-block hero">
                <!-- <img class="banner banner-web" :src="banner_web">
                <img class="banner banner-mobile" :src="banner_mobile"> -->
            </div>

    </section>
</template>

<script>
import { mapActions } from "vuex";
import { required } from 'vuelidate/lib/validators/';

export default {
    middleware: "isAuth",
    // layout: "mainLayout",
    data() {
        return {
            background_image: '',
            email: null,
            password: null,
            signing_in: false,
            checked: false,

            banner_web: require("~/static/assets/images/banners/banner-web.jpg"),
            banner_mobile: require("~/static/assets/images/banners/ASD-Mobile-banner.jpg"),
        };
    },
    validations: {
        email: {
            required,
        },
        password: {
            required,
        },
    },
    created() {
        this.$v.$reset;
    },
    methods: {
        ...mapActions({
            vxLogin: "auth/login",
        }),
        recheckInputs() {
            this.$v.$touch();
            if(this.$v.$error) {
                this.$message.error('Please fill in required fields.');
			} else {
                this.login();
            }
        },
        login() {
            let data = {
                email: this.email,
                password: this.password,
            };
            this.vxLogin(data)
            .then((res) => {
                this.$router.push("/profile");
            })
            .catch((err) => {
                if(err.response.status == 400 || err.response.status == 401 || err.response.status == 404) {
					this.$message.error(err.response.data.message);
				} else {
					this.$message.error('Something went wrong. Please contact the site admin.');
				}
            });
        },
    }
};
</script>

<style lang="scss" scoped>

    #container-login-form{
        height: 100vh;
        .banner {
            object-fit: contain;
            &-web {
            width: 200%;
            }
            &-mobile {
            display: none;
            }
        }
        .hero{
            background-image: url('~/static/assets/images/banners/banner-web.jpg');
            background-size: cover;
        }
    }
</style>