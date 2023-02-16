<template>
    <section id="abstract-type" class="dmsans-bold">
        <div class="container pb-5">
            <div class="contents d-flex flex-column justify-content-center">
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center">
                    <div class="text-center col-md-6 py-5 mx-auto opensans">
                        <p class="dmsans-regular fs-12m">
                            Please select the category of your submission below.<br><a href="/abstract-submission-guidelines" target="_blank">Click here for Abstract Submission Guidelines</a>.
                        </p>
                    </div>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px mb-4 mx-2" @click="setAbstractType(1)">
                        E-Poster Exhibit
                    </button>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px mx-2" @click="setAbstractType(2)">
                        Free Paper Presentation
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        setAbstractType(type) {
            this.$store.commit("members/SET_ABSTRACT_TYPE", type);
            this.$parent.goToStep(2)
        },
    },
}
</script>

<style lang="scss" scoped>
#abstract-type {
    button {
        font-size: 1.5rem;
        letter-spacing: 1px;
        width: 25%;
    }
    @media only screen and (max-width: 767px) {
        p{
                text-align: center;
            }
            button {
                width: 75% !important;
            }
    }
}
</style>