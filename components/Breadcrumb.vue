<template>
	<div class="dmsans-regular">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
			<el-breadcrumb-item class="text-uppercase">{{ page_title }}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
    props: ['page_title']
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
    padding: 15px;
    border-bottom: 3px solid lightgray;
}
</style>