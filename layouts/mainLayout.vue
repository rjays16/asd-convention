<template>
    <div>
        <Navbar />
		<div class="page-content">
        	<Nuxt />
		</div>
		<BottomNav />
		<Foot />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
	.page-content {
		margin-top: 75px;
	}
</style>
