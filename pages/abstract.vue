<template>
    <div class="my-5">
        <div>
            <AbstractType v-if="current_step == 1"/>
            <AbstractForm v-if="current_step == 2" :abstract_type="abstractType" :category="category_list" :study="study_design_list"/>
            <AbstractThankYou v-if="current_step == 3" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	layout: 'abstractLayout',
	middleware: "auth",
	data() {
		return {
			current_step: 1,
			abstractType: this.$store.state.members.abstractType,
		}
	},
	computed: {
	    ...mapGetters({
			category_list: 'members/getAbstractCategoryList',
			study_design_list: 'members/getAbstractStudyList',
		})
    },
	methods: {
		goToStep(step) {
		    this.current_step = step;
      	},
      	nextStep(step) {
		    this.current_step += step;
      	}
    },
	async fetch() {
		this.$store.dispatch('members/getAbstractCategoryList')
		this.$store.dispatch('members/getAbstractStudyList')
	}
}
</script>

<style scoped>
.btn-blue-round {
	width: 200px;
	/*background: #040C55;*/
	background: #030C4C;
	border-radius: 22px;
	font-size: 25px;
	color: white;
	border: none;
	margin-bottom: 10px;
}
.btn-opt button {
	display: block;
	margin: 0 auto;
	margin-bottom: 10px;
}
</style>
