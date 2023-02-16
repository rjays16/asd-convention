<template>
  <section id="about">
    <div class="hero">
      <img class="banner banner-web" :src="banner_web">
      <img class="banner banner-mobile" :src="banner_mobile">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banner_web: require("~/static/assets/images/banners/banner-web.jpg"),
      banner_mobile: require("~/static/assets/images/banners/ASD-Mobile-banner.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
#about {
  .banner {
    object-fit: contain;
    &-web {
      width: 100%;
      height: 80%;
      display: block;
    }
    &-mobile {
      display: none;
    }
  }
  @media only screen and (max-width: 767px) {
    .banner {
      &-web {
        display: none;
      }
      &-mobile {
        width: 100%;
        height: 80%;
        display: block;
      }
    }
  }
}
</style>