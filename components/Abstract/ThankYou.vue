<template>
    <section id="abstract-thankyou" class="avenir-bold px-1">
        <div class="container pb-5">
            <div class="contents d-flex flex-column justify-content-center">
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center">
                    <div class="text-left col-md-6 py-5 mx-auto">
                        <p class="avenir-regular fw-bold">
                            Your abstract has been recorded. Thank you for your submission!
                        </p>
                    </div>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px mb-4" @click="$router.push('/abstract')">
                        Submit Another Abstract
                    </button>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px" @click="$router.push('/profile')">
                        Go Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "thankyou",
}
</script>
<style lang="scss" scoped>
#abstract-thankyou {
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
