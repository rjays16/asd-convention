<template>
	<div>
        <HomeAbout />
        <section class="abstract-main">

            <div ref="absHeader" class="container dmsans-regular abstract-main-head">
                <div class="row">
                    <div class="col-12">
                        <h3>The 4th Annual Meeting of Asian Society of Dermatopathology (ASD) invites submissions for:</h3>
                        <ul>
                            <li>Free Communications</li>
                            <li>E-Posters</li>
                        </ul>
                        <p>Submissions that are related to dermatopathology including case reports, case series or studies highlighting dermatopathological features, descriptions or investigations are welcome.</p>
                        <p>Case presentations highlighting extraordinary or unusual dermatopathological features are suitable for free communications or E-posters.</p>
                    </div>
                </div>
            </div>
            <div class="container mb-4 abstract-main-head">
                <div class="row justify-content-start">
                    <div class="col-lg-6 col-md-12">
                        <div class="title bg-030C4C corner-rounded text-white p-3">
                            <h3 class="text-center text-md-start rajdhani-bold mb-0">
                                Abstract Submission Guidelines
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container dmsans-regular">
                <div class="row">
                    <div class="col-12">
                        <h3>Abstract Submission Guidelines for Free Communications and E-posters:</h3>
                        <ol>
                            <li>Please <a href="/registration">register</a> to submit your abstract.</li>
                            <li>All abstracts must be submitted via the website.</li>
                            <li>Select "Free Communications" or "E-poster".</li>
                            <li>The abstract must be written in English in not more than 250 words. This word limit refers to the body of the abstract and does not include the authors' names, affiliations, and title of abstract.</li>
                            <li>Use of standard abbreviations is desirable. Place special or unusual abbreviations in brackets after the full word the first time it appears. Use numerals to indicate numbers, except to begin sentences.</li>
                            <li>Do not include graphs, tables and references in the abstract.</li>
                        </ol>
                        <h3>IMPORTANT INFORMATION:</h3>
                        <ol>
                            <li>Only authors who have paid the registration fee are entitled to submit an abstract for "Free Communications" or "E-poster".</li>
                            <li>Abstracts are subject to the approval of the Research Committee.</li>
                            <li>Contents of the abstract must not have been presented, submitted or accepted for presentation at another meeting or previously published in any journal.</li>
                            <li>Potential conflicts of interest must be indicated at the point of abstract submission.</li>
                            <li>The Research Committee reserves the right to assign an accepted "E-poster" abstract to be presented under the "Free Communications" category and vice versa.</li>
                            <li>By submitting an abstract in the "Free Communications" category, you agree to make yourself available for the presentation slot to which your abstract is assigned, and the Q&amp;A session that follows.</li>
                            <li>Submission deadline for abstracts is on July 15, 2022.</li>
                            <li>Notification of acceptance or rejection will be sent via email by July 30, 2022.</li>
                            <li>Accepted abstracts will be featured in the conference E-book of abstracts.</li>
                        </ol>

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