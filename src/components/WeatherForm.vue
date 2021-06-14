<template>
  <div
    class="relative flex flex-col justify-center items-center font-poppins max-w-6xl"
  >
    <div
      class="text-white xs:text-2xl sm:text-6xl font-semibold font-poppins mb-24 lowercase xs:self-center md:self-start flex"
    >
      <h2 class="mr-4">a bit about</h2>
      <h2 class="text-theme-primary boingHover">
        me
      </h2>
      .
    </div>

    <div
      class="w-full xs:flex xs:flex-col sm:grid sm:grid-cols-2 justify-center items-center xs:mb-0 sm:mb-72"
    >
      <div>
        <p
          class="text-xl text-white  font-normal xs:w-72 sm:w-100 text-justify"
        >
          Digital arts lover, not an engineer. I am a fullstack web dev,
          hobbyist artist, and cinema lover based in Oporto. I want to learn
          more about web desig.
        </p>
        <p
          class="text-xl text-white  font-normal xs:w-72 sm:w-100 text-justify pt-10"
        >
          <span class="text-xl text-theme-primary font-bold uppercase "
            >Shcool</span
          >
          : Escola Superior de Media Arts e Design - IPP
        </p>

        <p
          class="text-xl text-white  font-normal xs:w-72 sm:w-100 text-justify"
        >
          <span class="text-xl text-theme-primary font-bold uppercase "
            >Internship</span
          >
          : Impetus
        </p>
        <p
          class="text-xl text-white  font-normal xs:w-72 sm:w-100 text-justify"
        >
          <span class="text-xl text-theme-primary font-bold uppercase "
            >Internship</span
          >
          : Willbe Collective.
        </p>
      </div>

      <div>
        <img
          class="md:absolute img img-01 w-120 h-auto xs:ml-0 sm:ml-20 xs:mt-0 md:-mt-72"
          :src="me2"
          alt=""
        />
        <img
          class="md:absolute img img-02 w-120 h-auto xs:ml-0 sm:ml-20 xs:mt-0 md:-mt-72"
          :src="me3"
          alt=""
        />
      </div>
    </div>

    <div
      class="text-white xs:text-2xl sm:text-6xl font-semibold font-poppins mb-24 lowercase xs:self-center md:self-start flex"
    >
      <h2 class="mr-4">what i</h2>
      <h2 class="text-theme-primary boingHover mr-4">
        like
      </h2>
      to do.
    </div>

    <div
      class="ticker-wrap mb-24 flex justify-center items-center w-screen h-auto"
    >
      <div class="ticker flex justify-center items-center">
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          nintendo
        </div>
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          draw
        </div>
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          cinema
        </div>
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          travel
        </div>
      </div>
      <div class="ticker flex justify-center items-center">
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          nintendo
        </div>
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          draw
        </div>
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          cinema
        </div>
        <div
          class="ticker__item text-white xs:text-3xl sm:text-10xl font-semibold font-poppins uppercase self-start flex hover:text-theme-primary"
        >
          travel
        </div>
      </div>
    </div>
    <div
      class="text-white  xs:text-2xl sm:text-6xl font-semibold font-poppins mb-24 lowercase xs:self-center md:self-start flex"
    >
      <h2 class="mr-4">some of my best</h2>
      <h2 class="text-theme-primary boingHover">
        Work
      </h2>
      .
    </div>
    <div class="xs:self-center md:self-start">
      <p class="text-xl text-white  font-normal xs:w-72 sm:w-full text-justify">
        Digital arts lover, not an engineer. I am a fullstack web dev, hobbyist
        artist, and cinema lover based in Oporto. I want to learn more about web
        desig. You can find more of my work on my
        <a
          href="http://www.behance.net/brunojusta98"
          class="text-xl text-theme-primary font-bold uppercase cursor-pointer "
          >BEHANCE </a
        >.
      </p>
    </div>
    <div
      v-if="selected"
      class=" h-full fixed w-full z-30 bg-black bg-opacity-50 top-0 left-0 flex flex-col justify-center items-center cursor-pointer transition duration-500 ease-in-out"
    >
      <div class="w-3/4 h-auto bg-gray-800 bg-opacity-90 p-5">
        <div
          class="bg-theme-primary w-22 h-auto mb-8 mt-4 ml-4 flex justify-center items-center"
        >
          <a
            @click="closeModal()"
            class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 text-white text-xl font-semibold font-poppins items-center justify-center lowercase"
          >
            back to projects
          </a>
        </div>
        <div class="flex p-4">
          <div
            :style="{
              'background-image': 'url(' + selected.src + ')',
            }"
            class="flex mb-5 w-full h-70 bg-cover bg-center shadow-lg"
          ></div>
          <div class="relative flex flex-col items-start h-auto w-full ml-10">
            <h2
              class="text-5xl text-theme-primary lowercase font-extrabold mb-5"
            >
              {{ selected.title }}
            </h2>

            <p class="text-xl text-white lowercase font-normal mb-24">
              {{ selected.description }}
            </p>

            <div
              class="bg-theme-primary w-auto absolute bottom-0 right-0 h-auto"
            >
              <a
                class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 text-white text-xl font-semibold font-sans items-center justify-center lowercase"
              >
                See it on Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="xs:flex xs:flex-col md:grid  md:grid-cols-2  md:gap-24 justify-center items-center"
    >
      <div
        v-for="p in projects"
        :key="p.id"
        class="relative flex-col items-start xs:w-72 md:w-100 opacity-75 hover:opacity-100 text-white hover:text-theme-primary transition duration-500 ease-in-out xs:mb-20 sm:mb-0"
      >
        <div
          class="projectCard relative xs:w-72 md:w-100 xs:h-64 md:h-70 bg-cover bg-center transition duration-500 ease-in-out flex justify-center items-center"
        >
          <img
            class="absolute xs:w-72 md:w-100 xs:h-64 md:h-70"
            :src="p.src"
            alt=""
          />

          <div
            class="overlay absolute top-0 left-0 w-full h-full bg-transparent transition duration-500 ease-in-out "
          ></div>
          <div
            class="button absolute w-full text-center opacity-0 cursor-pointer"
          >
            <a
              @click="showMore(p.id)"
              class="md:inline-flex md:w-auto w-full px-2 py-2 text-2xl font-semibold font-poppins items-center justify-center lowercase bg-theme-primary text-white hover:text-black hover:bg-gray-50 "
            >
              + know more
            </a>
          </div>
        </div>
        <p
          class="w-full text-4xl absolute font-poppins font-semibold z-10 transition  ease-in-out uppercase "
        >
          {{ p.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import me from "@/assets/me.png";
import me2 from "@/assets/me2.png";
import me3 from "@/assets/me3.png";

import fcm from "@/assets/projects/fcm.png";
import impetus from "@/assets/projects/impetus.png";
import ondisplay from "@/assets/projects/ondisplay.png";
import pointer from "@/assets/projects/pointer.png";
import tetris from "@/assets/projects/tetris.png";
import winehead from "@/assets/projects/winehead.png";

export default {
  components: {},
  data: () => ({
    me: me,
    me2: me2,
    me3: me3,
    fm: fcm,
    impetus: impetus,
    ondisplay: ondisplay,
    pointer: pointer,
    tetris: tetris,
    winehead: winehead,
    selected: {
      id: 0,
      title: "Tetris",
      src: tetris,
      description:
        "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
    },
    projects: [
      {
        id: 0,
        title: "Tetris",
        src: tetris,
        description:
          "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
      },
      {
        id: 1,
        title: "Impetus - Innovation",
        src: impetus,
        description:
          "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
      },
      {
        id: 2,
        title: "Winehead factory",
        src: winehead,
        description:
          "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
      },
      {
        id: 3,
        title: "Pointer",
        src: pointer,
        description:
          "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
      },
      {
        id: 4,
        title: "Fcm tour",
        src: fcm,
        description:
          "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
      },
      {
        id: 5,
        title: "Ondisplay",
        src: ondisplay,
        description:
          "The web application presented in this project was created with the intention of facilitating the booking and management of events and catering at the Escola Superior de Hotelaria e Turismo of the Instituto Politécnico do Porto. In this way, the contractor does not need to worry about guiding professionals or dealing with the various suppliers, thus being able to comfortably enjoy the event. This application is visible to everyone, however only members of the Instituto Politécnico do Porto can register and make reservations through the galleries of Events, Workshops, and Rooms.",
      },
    ],
  }),
  created() {
    this.selected = null;
  },
  computed: {},
  methods: {
    showMore(id) {
      this.selected = this.projects[id];
    },
    closeModal() {
      this.selected = null;
    },
  },
};
</script>
