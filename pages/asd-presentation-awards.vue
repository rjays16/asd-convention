<template>
	<div>
        <HomeAbout />
        <section class="abstract-main">
            <div ref="absHeader" class="container mb-4 abstract-main-head">
                <div class="row justify-content-start">
                    <div class="col-lg-6 col-md-12">
                        <div class="title bg-030C4C corner-rounded text-white p-3">
                            <h3 class="text-center text-md-start rajdhani-bold mb-0">
                                ASD Presentation Awards
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container dmsans-regular">
                <div class="row">
                    <div class="col-12">
                        <ul>
                            <li>ASD is giving awards to outstanding online presentations in the ASD annual meeting for trainees or young doctors.</li>
                            <li>Visit the <a href="https://www.asdermpath.org/index.php" target="_blank">ASD official site</a> for more information on the application process for the award.</li>
                            <li>Awards
                                <ul>
                                    <li>USD$200 each are awarded to qualified applicants for oral presentation</li>
                                    <li>USD$100 each are awarded to qualified applicants for e-poster</li>
                                </ul>
                            </li>
                            <li>Award application deadline: August 31</li>
                            <li>Award acceptance notification: September 16</li>
                            <li>Requirements:
                                <ul>
                                    <li>Recipient must be an ASD member or associate member.</li>
                                    <li>Recipient must submit an oral or e-poster presentation which has been accepted at the 2022 ASD annual meeting.</li>
                                    <li>All applicants must be duly qualified physicians practicing/training in dermatology or pathology.</li>
                                    <li>Candidates must show positive impact of his/her participation on the field of Dermatopathology in the recipient's country.</li>
                                    <li>Age: 40 years old and below</li>
                                    <li>Priority is given to participants not within the host country, with special priority given to those from developing countries.</li>
                                </ul>
                            </li>
                        </ul>

                        <!-- <p>Content patterned from 2021 ASD.</p> -->
                    </div>
                </div>
            </div>
        </section>
	</div>
</template>

<script>
export default {
	layout: "home",
	data() {
		return {};
	},
    methods: {
        scrollToHeader() {
            const absHeader = this.$refs.absHeader;

            if (absHeader) {
                // Use el.scrollIntoView() to instantly scroll to the element
                absHeader.scrollIntoView({behavior: 'smooth'});
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.scrollToHeader()
        }, 300)
    }
};
</script>

<style scoped>
    .corner-rounded {
        border-radius: 20px !important;
    }
    .abstract-main-head {
        padding-top: 70px;
    }
</style>