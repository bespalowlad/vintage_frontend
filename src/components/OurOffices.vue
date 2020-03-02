<template>
  <section class="s-our-offices">
    <div class="container">
      <h3 class="title" data-aos="fade" data-aos-duration="1000">Our Offices</h3>

      <div class="tabs" data-aos="fade" data-aos-delay="200" data-aos-duration="1000">
        <ul>
          <li
            v-for="(tab, index) of points"
            :key="index"
            @click="updateGeolocate(tab)"
            :class="{active: activePoint == tab}"
          >{{tab.name}}</li>
        </ul>
      </div>

      <div class="info" data-aos="fade" data-aos-delay="400" data-aos-duration="1000">
        <swiper :options="options" ref="swiper">
          <swiper-slide v-for="(slide, i) of points" :key="i">
            <h5 class="name">{{slide.name}}</h5>
            <div class="address" v-html="slide.address"></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div id="map" data-aos="fade" data-aos-duration="1000">
      <GmapMap
        :center="activePoint.position || {}"
        :zoom="7"
        :options="{styles: MapStyles, disableDefaultUI : true}"
        style="width: 100%; height: 100%"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in points"
          :position="m.position"
          :icon="Marker"
        />
      </GmapMap>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import MapStyles from "../googleMapStyle.json";
import Marker from "@/assets/images/marker.svg";
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "OurOffices",

  data: () => ({
    center: {},
    points: [
      {
        id: 0,
        position: { lat: 50.401699, lng: 30.252512 },
        name: "KYIV",
        address: "<p>Kuiv, Stepan Bandera, 33</p><p>02066</p><p>Ukraine</p>"
      },
      {
        id: 1,
        position: { lat: 40.697403, lng: -74.1201072 },
        name: "New york",
        address: "<p>New york, Stepan Bandera, 33</p><p>02066</p><p>Ukraine</p>"
      },
      {
        id: 2,
        position: { lat: 23.1253491, lng: 112.9469707 },
        name: "Guangzhou",
        address:
          "<p>Guangzhou, Stepan Bandera, 33</p><p>02066</p><p>Ukraine</p>"
      },
      {
        id: 3,
        position: { lat: 41.3947687, lng: 2.0785566 },
        name: "barcelona",
        address:
          "<p>barcelona, Stepan Bandera, 33</p><p>02066</p><p>Ukraine</p>"
      }
    ],
    activePoint: {},
    MapStyles,
    Marker,
    options: {
      allowTouchMove: false
    }
  }),

  components: {
    swiper,
    swiperSlide
  },

  mounted() {
    this.activePoint = this.points[0];
  },

  methods: {
    updateGeolocate(point) {
      this.activePoint = point;
      this.$refs.swiper.swiper.slideTo(point.id);
    }
  }
};
/* eslint-enable */
</script>
