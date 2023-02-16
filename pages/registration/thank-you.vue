<template>
	<div class="inner-content dmsans-regular text-center">
		<button class="dmsans-regular btn btn-blue no-pointer w-75 p-4 corner-22px text-white fw-bold font-30 text-uppercase">
			<h1>Your registration is successful!</h1>
		</button>
		<div  class="text-center message py-5 mt-2">
			<p>
				Thank you for joining the 4th ASD Annual Meeting!
			</p>
			<p>
				Please check your email for your transaction details. You may also click the button below to log in to your account.
			</p>
			<p>
				See you virtually!
			</p>
		</div>
			<button type="button" @click="$router.push('/login')"
				class="dmsans-regular login btn btn-blue p-3 corner-22px mb-4 text-white text-wrap fw-bold">
				<h1>Log in</h1>
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
		// font-size: 30px;
		font-size: calc(80% + .5vw + .5vh);
		line-height: 45px;
		letter-spacing: 1px;
    }

	.login{
		width: 32%;
	}
}
</style>
