<style>
	/* .page-content{
		min-height: 100%;
	}
	.inner-content{
		margin: 40px 0px;
	} */
	.capt{
		width: 70%;
	    text-align: center;
	    margin: 0 auto;
	}
	@media(max-width: 520px){
		.capt{
			width: 80%;
		}
	}
</style>
<template>
	<div>
		<RegistrationHeader />
		<RegistrationNavbar v-show= "this.$route.path === '/registration' || this.$route.path === '/abstract' || this.$route.path === '/login/profile'"/>
		<RegistrationSubheader />
		<div class="page-content">
        	<Nuxt />
		</div>
		<RegistrationFooter />
	</div>
</template>