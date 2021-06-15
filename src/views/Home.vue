<template>
  <div class="relative flex flex-col justify-center ">
    <div class="background w-screen "></div>

    <div
      class="flex flex-col justify-start xs:items-center lg:items-start xs:ml-0  lg:ml-88 xs:mt-4 lg:mt-28  xs:mb-10 lg:mb-32"
    >
      <h1
        class="text-white xs:text-6xl lg:text-11xl font-semibold font-poppins mb-4 flex"
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
      <img class="justa w-2/3 xs:ml-0 lg:ml-22" :src="this.logo" />
    </div>

    <div
      class="appearance self-center xs:hidden lg:flex flex-col justify-center items-center mb-24"
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

    <div
      class="appearance self-center xs:flex lg:hidden flex-col justify-center items-center"
    >
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_8dphtide.json"
        background="transparent"
        speed=".5"
        style="width: 350px; height: 200px;"
        loop
        autoplay
        class="mb-12"
      ></lottie-player>
      <h1
        class="justa text-white xs:text-5xl font-semibold font-poppins mb-10 flex"
      >
        I'm <span class="text-theme-primary ml-2"> sorry</span>!
      </h1>
      <p
        class="text-white xs:text-lg md:text-2xl font-thin font-poppins mb-2 w-72 text-justify"
      >
        this portfolio was developed for desktop only. I'm working on a mobile
        version so hope to see you soon. You can check my work on my
        <a
          href="http://www.behance.net/brunojusta98"
          target="_blank"
          class="text-theme-primary font-semibold"
          >BEHANCE</a
        >.
      </p>
    </div>

    <div class="xs:hidden lg:flex justify-center items-center">
      <Projects />
    </div>

    <div class="xs:flex lg:hidden w-full flex-wrap justify-evenly mt-8 mb-1">
      <div
        class=" text-white hover:text-theme-primary  h-7 mr-2 flex justify-center items-center"
      >
        <a
          href="https://github.com/BrunoJusta"
          target="_blank"
          class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-lg font-normal font-poppins items-center justify-center lowercase cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github mb-1 "
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="text-white hover:text-theme-primary   h-7 mr-2 flex justify-center items-center"
      >
        <a
          href="https://www.linkedin.com/in/bruno-justa98/"
          target="_blank"
          class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-lg font-normal font-poppins items-center justify-center lowercase cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin mb-2 "
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <div
        class="text-white hover:text-theme-primary   h-7 mr-2 flex justify-center items-center"
      >
        <a
          href="https://www.behance.net/brunojusta98"
          target="_blank"
          class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-lg font-normal font-poppins items-center justify-center lowercase cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current mb-1"
          >
            <path
              d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
            />
          </svg>
        </a>
      </div>
      <div
        class="text-white hover:text-theme-primary  h-7 mr-2  flex justify-center items-center"
      >
        <a
          href="https://www.instagram.com/stellaregion/"
          target="_blank"
          class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-lg font-normal font-poppins items-center justify-center lowercase cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram "
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
      <div
        class="text-white hover:text-theme-primary  h-7 mr-2  flex justify-center items-center"
      >
        <a
          href="mailto:brunomajusta@gmail.com"
          class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-lg font-normal font-poppins items-center justify-center lowercase cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail "
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
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
