<style scoped>
	.head{
		position: relative;
		width: 100%;
		height: 150px;
		background: linear-gradient(266.59deg, #8AC8F7 21.62%, #0059C5 49.1%, #040C55 72.87%);
	}
	.head img{
		position: absolute;
	    width: 270px;
	    left: 20px;
	    top: 6%;
	}
	@media(max-width: 540px){
		.head{
			height: 100px;
		}
		.head img{
			position: absolute;
		    width: 170px;
		}
	}
</style>
<template>
	<div>
		<div class="head">
			<img src="/assets/images/ONE trans.png">
		</div>
	</div>
</template>