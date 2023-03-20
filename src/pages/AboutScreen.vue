<template>
  <div class="container-wrapper">
    <div class="img-banner">
      <h2 class="text-white">About</h2>
    </div>
  </div>
  <div class="section-md text-sm-left">
    <div class="shell">
      <div class="range range-sm-middle">
        <div class="cell-sm-6 wow fadeInUp" data-wow-delay=".1s">
          <div class="box-outline box-outline__mod-1">
            <figure>
              <img
                src="@/public/image/about/about-01-546x516.jpg"
                alt=""
                width="546"
                height="516"
              />
            </figure>
          </div>
        </div>
        <div class="cell-sm-6 cell-md-5 wow fadeInUp">
          <h3>A Few Words About Us</h3>
          <p>
            Tired of your daily routine? Seeking for a place to stay and rest
            with your family? You are in the right place! Our spa resort and
            hotel provides luxury and historic accommodations for travelers. It
            combines modern style and amenities with traditional values.
          </p>
          <p>
            All rooms are equipped with air conditioners and LCD TVs. Free WI-FI
            service is available throughout the territory of the hotel. Our
            restaurant food and meals from world cuisines unite people
            connecting history and traditions. Experience our warm hospitality,
            high quality of service and exceptional comfort! Make a reservation
            for your dream vacation today!
          </p>
          <CButton
            :label="'read more'"
            :class-name="'button-primary button button-square button-effect-ujarak button-lg'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
</script>

<style lang="scss" scoped>
.container-wrapper {
  width: 100%;
  position: relative;

  .img-banner {
    height: 304px;
    width: 1920px;
    background: url("@/public/image/about/breadcrumbs-01.jpg");
    padding-top: 95px;
    padding-bottom: 110px;
    .text-white {
      position: absolute;
      color: white;
      font-size: 60px;
      font-weight: 700;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
@media (min-width: 768px) {
  .text-sm-left {
    text-align: left;
  }
  .section-md {
    padding-top: 95px;
    padding-bottom: 110px;
  }
  .range > .cell-sm-6 {
    flex-basis: 50%;
    max-width: 50%;
  }
}
@media (min-width: 1200px) {
  .shell {
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
}
.range {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  transform: translateY(-50px);
  margin-bottom: -50px;
  pointer-events: none;
  justify-content: space-between;
}
@media (min-width: 992px) {
  .range > .cell-md-5 {
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
}
</style>
