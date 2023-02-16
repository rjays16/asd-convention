<template>
    <div class="inner-content dmsans-regular text-center">
		<button class="dmsans-bold btn btn-blue no-pointer w-75 p-4 corner-22px mb-4 text-white fw-bold text-uppercase">
			<h1>Sorry, your payment has been declined.</h1>
		</button>
		<div class="text-center text-wrap message m-4">
			<p>
				Please check with your bank, or you may try a different payment method.
			</p>
			<p>
				No Worries! You can process your payment again through the profile dashboard page using the email & password you have previously set. If you have forgotten your password, please reset your password on the login page.
			</p>
			<p class="text-wrap">
				If your issue is not mentioned above, please contact our technical support at <a href="mailto:registration@asdmeeting2022.com"><b>registration@asdmeeting2022.com</b></a>, expect a 24-48 hour turn around. 
			</p>
		</div>
		<button type="button" @click="$router.push('/registration')"
			class="dmsans-regular btn btn-blue w-25 p-3 corner-22px m-3 text-white fw-bold">
			Go Back to Registration
		</button>
	</div>
</template>

<script>
	export default{
		layout: 'registrationLayout',
	}
</script>

<style lang="scss" scoped>
.inner-content {
	.btn-blue{
		background: #030C4C;
	}
	button, .message {
		font-size: calc(75% + .25vw + .5vh);
		line-height: 45px;
		letter-spacing: 1px;
    }
}
</style>
