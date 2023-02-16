<template>
    <section id="organizing-commitee" class="mt-5">
        <CommitteesAboutASD />
        <CommitteesAboutDSP-PDS />
        <CommitteesASDAnnualMeeting />

    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
#organizing-commitee {
    .divider {
        background-image: url('~/static/assets/images/divider.png') !important;
        height: 250px;
        background-size: cover;
    }
    .logo-asd {
        width: 100%;
        object-fit: cover;
    }

    .bg-030C4C{
        border-radius: 20px !important;
    }
    .banner {
        width: 100%;
        background-color: #F7F7F7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .container {
            position: relative;
            .text {
                padding: 7% 0 10% 0;
                h2 {
                    letter-spacing: 10px;
                    font-size: 2.5rem;
                    font-weight: 700;
                    font-family: 'Avenir-Regular';
                }
                span {
                    letter-spacing: 10px;
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .divider{
            height: auto ;
        }

        .logo-asd {
            width: 80% !important;
        }

        .visitLink{
            font-size: 1.3rem;
        }

        .low-side{
            margin: -1em auto 2em auto;
        }
    }

    @media only screen and (max-width: 991px) {
        .logo-asd {
            width: 50%;
        }
    }
}
</style>