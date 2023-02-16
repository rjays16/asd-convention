<template>
    <section id="inner-banner">
        <div class="heading-cont">
            <div class="content">
				<p class="txt-heading amatic-regular text-uppercase" v-html="bannerData.bannerText"></p>
                <div v-if="bannerData.ctaBtn">
                    <NuxtLink class="btn btn-green-play text-uppercase poppins-light corner-pill" :to="bannerData.ctaRoute">
                        {{ bannerData.ctaText }}
                        <i class="fa fa-play"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div id="heroSlider" class="carousel slide" data-ride="carousel">
        <ol v-if="bannerData.slides.length > 1" class="carousel-indicators">
            <li data-target="#heroSlider" v-for="(item, index) in bannerData.slides" :key="item.id" :class="{ 'active': index === 0 }" :data-slide-to="index"></li>
        </ol>            
        <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in bannerData.slides" :key="item.id" :class="{ 'active': index === 0 }" >
                <div class="slide-cont" :style="'background-image: url(' + item.bg + ');'"></div>
            </div>

        </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['bannerData'],
    data() {
        return {

        }
    },
    methods: {
        submit() {
            console.log('submit')
        }
    }    
}
</script>

<style lang="scss" scoped>
    #inner-banner {
        position: relative;
        .heading-cont {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            min-height: 400px;
            display: table;
            width: 100%; /*percent*/
            text-align: center;
            overflow: hidden;
            .content {
                display: table-cell;
                vertical-align: middle;
                padding: 15px;
                .txt-heading {
                    font-size: 8.5vw;
                    margin-bottom:0;
                    color: white;
                }
                .txt-subheading {
                    font-size: 6vw;
                    color: white;
                }
            }
        }
        .slide-cont {
            background-position: center center;
            background-size: cover;
            min-height: 400px;
        }
    }
    @media only screen and (max-width: 420px) {
        #inner-banner {
            .heading-cont {
                .content {
                    .txt-heading {
                        font-size: 20vw;
                        line-height: 20vw;
                    }
                    .txt-subheading {
                        font-size: 10vw;
                    }                       
                }
            }
        }
    }
    @media only screen and (min-width: 1921px) {
        #inner-banner {
            .heading-cont {
                .content {
                    .txt-heading {
                        font-size: 5vw;
                    }
                }
            }
        }
    }      
</style>