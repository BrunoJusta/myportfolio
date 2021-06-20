<template>
  <div class="w-full max-w-screen-xxxl">
    <div class="mb-24">
      <div
        class="flex justify-center items-center mt-28 xs:mr-0 sm:mr-40 md:mr-52 lg:mr-72 xxl:mr-96 mb-2"
      >
        <h1
          class="flex xs:text-6xl md:text-8xl lg:text-10xl xxl:text-12xl font-semibold font-poppins"
        >
          <span class="boingHover text-theme-primary">
            H
          </span>
          <span class="boingHover text-theme-primary">
            e
          </span>
          <span class="boingHover text-theme-primary">
            l
          </span>
          <span class="boingHover text-theme-primary">
            l
          </span>
          <span class="boingHover text-theme-primary">
            o
          </span>
          <span class="boingHover text-white">
            ,
          </span>
          <span class="boingHover text-white">
            I
          </span>
          <span class="boingHover text-white">
            '
          </span>
          <span class="boingHover text-white">
            m
          </span>
        </h1>
      </div>
      <div class="flex flex-col justify-start items-center">
        <img class="justa w-3/5" alt="justa-logo" :src="this.logo" />
      </div>
    </div>

    <div
      id="scroll"
      class="appearance self-center xs:hidden lg:flex flex-col justify-center items-center mb-24 transition duration-500 ease-in-out"
    >
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
  </div>
</template>

<script>
import logoSvg from "@/assets/img/logoAnime.svg";
import mouse from "@/assets/img/scroll.json";

export default {
  data: () => ({
    logo: logoSvg,
    mouse: mouse,
  }),
  created() {
    setTimeout(this.fade_out, 5000);
  },
  methods: {
    fade_out() {
      if (document.getElementById("scroll")) {
        document.getElementById("scroll").style.opacity = "0";
      }
    },
  },
};
</script>
