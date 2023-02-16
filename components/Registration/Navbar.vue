<template>
	<div class="dmsans-bold text">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
			<el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script>
export default {
	computed:{
		breadcrumb(){
			if (this.$route.path === '/registration'){
				return "REGISTRATION"
			}else if(this.$route.path === '/abstract'){
				return "ABSTRACT"
			}else if(this.$route.path === '/login/profile'){
				return "PROFILE"
			}else{
				return " "
			}
		},
	}
};
</script>

<style scoped>
	.el-breadcrumb{
		padding: 20px; 
    	border-bottom: 3px solid lightgray;
		font-size: 28px;
	}
</style>
