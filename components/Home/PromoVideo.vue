<template>
  <section id="promo-video">
    <div class="con-iframe">
      <div class="position-relative" style="padding: 56.25% 0 0 0">
        <iframe class="video"
          src="https://player.vimeo.com/video/694789792?h=918ac78c36"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          width="640"
          height="360">
        </iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#promo-video {
  .con-iframe{
    background-image: url('~/static/assets/images/video-frame.png');
    position: relative;
    background-position: top center;
    background-size: cover;
  }
  .video {
    position: absolute;
    top: 0;
    left: 12%;
    width: 80%;
    height: 100%;
  }

  @media only screen and (max-width: 767px) {
    .con-iframe{
      background-image: none !important;
      position: relative;
    }
    .video {
      left: 0;
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .con-iframe {
      margin: 3rem auto;
      max-width: 90%;
    }
  }
}
</style>