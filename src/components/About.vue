<template>
  <div
    class="flex flex-col justify-center items-center max-w-screen-xxl px-8 xs:mb-88 sm:mb-22 lg:mb-32 xxl:mb-0"
  >
    <div
      class="flex text-white xs:text-2xl sm:text-5xl lg:text-6xl xs:self-center xxl:self-start  font-semibold font-poppins xs:mb-10 md:mb-24 lowercase"
    >
      <h2 class="mr-4">a bit about</h2>
      <h2 class="text-theme-primary boingHover">
        me
      </h2>
      .
    </div>

    <div
      class="xs:flex xs:flex-col xxl:grid xxl:grid-cols-2 justify-center items-center xs:mb-0 sm:mb-72"
    >
      <div class="flex flex-col justify-center items-center xs:w-72 sm:w-full">
        <p
          class="self-start text-2xl text-white  font-normal  text-justify mb-1"
        >
          <span class="text-2xl text-theme-primary font-bold uppercase"
            >Bruno Justa</span
          >
          , level 22
        </p>
        <div class="self-start flex  justify-start items-center mb-8 ">
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://github.com/BrunoJusta"
              rel="noopener"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 xs:text-xxs sm:text-tiny font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              GITHUB
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://www.linkedin.com/in/bruno-justa98/"
              rel="noopener"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  xs:text-xxs sm:text-tiny  font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              LINKEDIN
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://www.behance.net/brunojusta98"
              rel="noopener"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  xs:text-xxs sm:text-tiny  font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              BEHANCE
            </a>
          </div>
          <div
            class="bg-theme-primary xs:hidden sm:flex  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://www.instagram.com/stellaregion/"
              rel="noopener"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  xs:text-xxs sm:text-tiny  font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              INSTAGRAM
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background h-5 mr-2  flex justify-center items-center"
          >
            <a
              href="mailto:brunomajusta@gmail.com"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  xs:text-xxs sm:text-tiny  font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              E-MAIL
            </a>
          </div>
        </div>

        <p
          class="xs:text-lg sm:text-xl text-white font-poppins  font-normal xs:w-72 sm:w-120 xxl:w-full text-justify"
        >
          Digital arts lover, full time dreamer. I'm a fullstack web dev,
          amateur artist and cinema lover based in Porto. I love to think
          outside the box and find creative solutions for all my projects. I
          also really like to make digital illustrations, especially I like to
          create my own Pokémon. <br />I wish to learn more about web
          development and UI/UX so i can become even better.
        </p>
        <p
          class="xs:text-lg sm:text-xl text-white  font-poppins  font-normal xs:w-72  sm:w-120 xxl:w-full text-justify pt-10"
        >
          <span
            class="xs:text-lg sm:text-xl text-theme-primary font-bold uppercase "
            >School</span
          >
          : Escola Superior de Media Arts e Design - IPP
        </p>

        <p
          class="xs:text-lg sm:text-xl text-white font-poppins  font-normal xs:w-72 sm:w-120 xxl:w-full text-justify"
        >
          <span
            class="xs:text-lg sm:text-xl text-theme-primary font-bold uppercase "
            >Internship</span
          >
          : Impetus
        </p>
        <p
          class="xs:text-lg sm:text-xl text-white  font-poppins  font-normal xs:w-72  sm:w-120 xxl:w-full text-justify"
        >
          <span
            class="xs:text-lg sm:text-xl text-theme-primary font-bold uppercase "
            >Internship</span
          >
          : Willbe Collective.
        </p>
      </div>

      <div class="xs:hidden xxl:block">
        <img
          class="xs:absolute md:absolute img img-01 w-120 h-auto xs:self-center xs:ml-0 sm:ml-20 xs:mt-0 md:-mt-72"
          :src="me2"
          alt="BrunoJusta"
        />
        <img
          class="xs:absolute md:absolute img img-02 w-120 h-auto xs:ml-0 sm:ml-20 xs:mt-0 md:-mt-72"
          :src="me3"
          alt="BrunoJustaDraws"
        />
      </div>
      <div class="xs:flex xs:justify-center xs:items-center xxl:hidden mt-24">
        <img
          class="absolute img img-01 w-96 h-auto mt-96 mb-32"
          :src="me2"
          alt="BrunoJusta"
        />
        <img
          class="absolute img img-02 w-96 h-auto mt-96 mb-32"
          :src="me3"
          alt="BrunoJustaDraws"
        />
      </div>
    </div>
  </div>
</template>

<script>
import me2 from "@/assets/img/me2.png";
import me3 from "@/assets/img/me3.png";

export default {
  data: () => ({
    me2: me2,
    me3: me3,
  }),
};
</script>
