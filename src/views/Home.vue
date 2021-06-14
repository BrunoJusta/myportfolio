<template>
  <div class="relative flex flex-col justify-center ">
    <div class="background w-screen"></div>

    <div
      class="flex flex-col justify-start xs:items-center sm:items-start xs:ml-0  sm:ml-88 mt-40  mb-32"
    >
      <h1
        class="text-white xs:text-6xl sm:text-11xl font-semibold font-poppins mb-5 flex"
      >
        <span class="boingHover text-theme-primary">
          H
        </span>
        <span class="text-theme-primary boingHover">
          e
        </span>
        <span class="text-theme-primary boingHover">
          l
        </span>
        <span class="text-theme-primary boingHover">
          l
        </span>
        <span class="text-theme-primary boingHover">
          o
        </span>
        <span class="text-white boingHover">
          ,
        </span>
        <span class="text-white boingHover">
          I
        </span>
        <span class="text-white boingHover">
          '
        </span>
        <span class="text-white boingHover">
          m
        </span>
      </h1>
      <img class="justa w-2/3 xs:ml-0 md:ml-22" :src="this.logo" />
    </div>

    <div class="appearance self-center flex flex-col justify-center items-center mb-24">
      <p class="font-poppins font-thin text-sm text-white opacity-75">
        Scroll for more
      </p>
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_ADqq0Z.json"
        background="transparent"
        speed=".5"
        style="width: 100px; height: 100px;"
        loop
        autoplay
      ></lottie-player>
    </div>

    <div class="flex justify-center items-center">
      <Projects />
    </div>
  </div>
</template>

<script>
import Projects from "@/components/WeatherForm.vue";
import logoSvg from "@/assets/logoAnime.svg";
import mouse from "@/assets/scroll.json";

export default {
  components: {
    Projects,
  },
  data: () => ({ selected: null, logo: logoSvg, mouse: mouse }),
  created() {},
  computed: {},
  methods: {},
};
</script>
