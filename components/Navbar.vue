<template>
<div class=" bg-040C55">

    <div class="d-flex justify-content-end pr-5 bg-040C55 py-2">
        <el-menu class="text-uppercase bg-065E99 main-menu d-sm-block d-md-none"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="1" class="border-0 item-mobile">
                <el-dropdown trigger="click">
                    <span class="btn nav-username text-white bs-0">
                        <!-- <a class="text-decoration-none fs-5">
                            <img src="/assets/images/logos/logo-rcd-white.png" />
                        </a> -->
                        <i class="fa fa-bars"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="user-options">
                        <el-dropdown-item class="border-bottom-b">
                            <a class="text-decoration-none text-dark " href="/">
                                <i class="fa fa-home pe-2"></i>
                                Home
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item class="border-bottom-b">
                            <a class="text-decoration-none text-dark" href="/scientific-program">
                                <i class="fa fa-flask pe-2"></i>
                                Scientific Program
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item class="border-bottom-b">
                            <a class="text-decoration-none text-dark" href="/faculty">
                                <i class="fa fa-sticky-note pe-2"></i>
                                Faculty
                            </a>
                        </el-dropdown-item>

                        <el-dropdown-item class="border-bottom-b">
                            <a class="text-decoration-none text-dark" href="#abstract">
                                <i class="fa fa-book pe-2"></i>
                                Call for Abstract
                            </a>
                            <ul>
                                <li>
                                    <a class="text-decoration-none text-dark" href="/abstract-submission-guidelines">
                                        Abstract Submission Guidelines
                                    </a>
                                </li>
                                <li>
                                    <a class="text-decoration-none text-dark" href="/asd-presentation-awards">
                                        ASD Presentation Awards
                                    </a>
                                </li>
                                <li>
                                    <a class="text-decoration-none text-dark" href="/abstract">
                                        Submit an Abstract
                                    </a>
                                </li>
                            </ul>
                        </el-dropdown-item>

                        <el-dropdown-item v-if="!isLoggedIn" class="border-bottom-b">
                            <a class="mb-0 text-decoration-none text-dark" href="/registration">
                                <i class="fa fa-registered pe-2"></i>
                                Register
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item class="border-bottom-b">
                            <p class="mb-0 text-dark" @click="logout" v-if="isLoggedIn">
                                <i class="fa fa-lock pe-2"></i>
                                Log Out
                            </p>
                            <a class="mb-0 text-decoration-none text-dark" href="/login" v-else>
                                <i class="fa fa-lock pe-2"></i>
                                Log In
                            </a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu-item>
        </el-menu>
        <!-- <div v-if="showFloaterMenu" class="d-xl-none h-sec-3p2 w-100">
            <div class="d-flex flex-column menu-items">
                <div class="menu-item py-5">
                    <a href="/" class="text-decoration-none fs-5 text-white">Home</a>
                </div>
                <div class="menu-item py-5">
                    <a class="text-decoration-none fs-5 text-white" href="/scientific-program">
                        Scientific Program
                    </a>
                </div>
                <div class="menu-item py-5">
                    <a class="text-decoration-none fs-5 text-white" href="#abstract">
                        Call for Abstract
                    </a>
                </div>
                <div class="menu-item py-5">
                    <a class="text-decoration-none fs-5 text-white" href="/registration">
                        Registration
                    </a>
                </div>
            </div>
        </div> -->

        <el-menu class="desktop-nav text-uppercase bg-040C55 main-menu d-none d-sm-none d-md-block"
            mode="horizontal"
            text-color="#fff"
            background-color="#040C55"
            active-text-color="#fff">
            <el-menu-item index="1" class="border-0">
                <a class="text-decoration-none fs-5" href="/">
                    Home
                </a>
            </el-menu-item>
            <el-menu-item class="border-0">
                <a class="text-decoration-none fs-5" href="/scientific-program">
                    Scientific Program
                </a>
            </el-menu-item>
            <el-menu-item class="border-0">
                <a class="text-decoration-none fs-5" href="/faculty">
                    Faculty
                </a>
            </el-menu-item>
            <!-- <el-menu-item class="border-0">
                <a class="text-decoration-none fs-5" href="#abstract">
                    Call for Abstract
                </a>
            </el-menu-item> -->
            <el-submenu index="2" class="border-0">
                <template slot="title"><a class="text-decoration-none call-for-abstract-link" href="#abstract">
                    Call for Abstract
                </a></template>
                <el-menu-item index="2-1">
                    <a class="text-decoration-none call-for-abstract-link" href="/abstract-submission-guidelines">
                        Abstract Submission Guidelines
                    </a>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <a class="text-decoration-none call-for-abstract-link" href="/asd-presentation-awards">
                        ASD Presentation Awards
                    </a>
                </el-menu-item>
                <el-menu-item index="2-3">
                    <a class="text-decoration-none call-for-abstract-link" href="/abstract">
                        Submit an Abstract
                    </a>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!isLoggedIn" index="2" class="border-0">
                <a class="text-decoration-none fs-5" href="/registration">
                    Registration
                </a>
            </el-menu-item>
            <el-menu-item v-if="!isLoggedIn" index="2" class="border-0">
                <a class="text-decoration-none px-3 py-1 corner-22px border-1px fs-5" href="/login">
                    Login
                </a>
            </el-menu-item>
            <el-menu-item  v-else class="border-0 item-web">
                &emsp;&emsp;
                <a class="text-decoration-none fs-5 px-3 py-2 bg-white corner-pill color-065E99 avenir-bold text-dark" @click="logout">
                    &emsp; Log Out &emsp;
                </a>
                &emsp;&emsp;
            </el-menu-item>
        </el-menu>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            activeIndex: '1',
            showFloaterMenu: false,

            type: null,
        }
    },
    computed: {
        ...mapGetters({
            isLoggedIn: 'auth/isLoggedIn',
        }),
    },
    watch: {
    },
    methods: {
        ...mapActions({
            vxLogout: "auth/logout",
            getUser: "auth/getUser"
        }),
        logout() {
            this.vxLogout()
            .then((res) => {
                this.$router.push("/login");
            })
            .catch((err) => {
                console.log(err);
                this.$router.push("/login");
            });
        },
        setUserType(){
            this.getUser()
            .then((res) => {
                this.type = res.data.member.type
                console.log(this.type)
            })
            .catch((err) => {
                console.log(err);
            });
        },
        toggleProfileDropdown() {
            this.showProfileDropdown = !this.showProfileDropdown
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted() {
		if(this.isLoggedIn){
            this.setUserType();
        }
    }
}
</script>

<style lang="scss" scoped>
.desktop-nav {
    margin:0 auto;
}
.main-menu {
    &.el-menu--horizontal {
        border-bottom: 0px;
        >.el-menu-item:not(.is-disabled):focus,
        >.el-menu-item:not(.is-disabled):hover,
        >.el-submenu .el-submenu__title:hover {
            background-color: #0d1b7e;
        }
    }
}
::v-deep .el-submenu__title {
    font-size: 1.25rem;
    line-height: 55px !important;
}
.call-for-abstract-link {
    color: #fff;
}
.custom-btn-burger{
    background: transparent;
}
nav li{
    border-bottom: 1px solid white;
}

/*Burger menu*/
.main-menu.el-menu--horizontal{
    background-color: #040C55;
}
.el-menu--horizontal>.el-menu-item.is-active{
    background-color: #040C55;
}
.el-popper{
    opacity: .9 !important;
}
</style>