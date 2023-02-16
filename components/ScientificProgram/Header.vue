<template>
    <section ref="spHeader" class="mt-4">
        <div class="container text-center">
            <h3 class="fw-bold text-uppercase">Asian Society of Dermatopathology 4th Annual Meeting (Virtual)</h3>
            <p class="h4 fw-bold d-inline-block">THEME:</p>
            <p class="h4 color-293E6C fw-bold d-inline-block">
                "One Direction, One Region, One Path"
            </p>
            <p class="h4 fw-bold">
                24-25 OCTOBER 2022
            <p class="h4">
            <p class="h5">Hosted by the Dermatopathology Society of the Philippines</p>
            <p class="h5">of the Philippine Dermatological Society (DSP-PDS)</p>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToHeader() {
            const spHeader = this.$refs.spHeader;

            if (spHeader) {
                // Use el.scrollIntoView() to instantly scroll to the element
                spHeader.scrollIntoView({behavior: 'smooth'});
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.scrollToHeader()
        }, 300)
    }
}
</script>