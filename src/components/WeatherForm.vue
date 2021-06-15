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
          class="text-2xl text-white  font-normal xs:w-72 sm:w-100 text-justify mb-1"
        >
          <span class="text-2xl text-theme-primary font-bold uppercase "
            >Bruno Justa</span
          >
          , level 22
        </p>
        <div class="flex  justify-start items-center mb-8 ">
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://github.com/BrunoJusta"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-tiny font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              GITHUB
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://www.linkedin.com/in/bruno-justa98/"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-tiny font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              LINKEDIN
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://www.behance.net/brunojusta98"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-tiny font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              BEHANCE
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background  h-5 mr-2 flex justify-center items-center"
          >
            <a
              href="https://www.instagram.com/stellaregion/"
              target="_blank"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-tiny font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              INSTAGRAM
            </a>
          </div>
          <div
            class="bg-theme-primary  hover:bg-white  text-theme-background hover:text-theme-background h-5 mr-2  flex justify-center items-center"
          >
            <a
              href="mailto:brunomajusta@gmail.com"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-tiny font-normal font-poppins items-center justify-center lowercase cursor-pointer"
            >
              E-MAIL
            </a>
          </div>
        </div>

        <p
          class="text-xl text-white  font-normal xs:w-72 sm:w-100 text-justify"
        >
          Digital arts lover, full time dreamer. I'm a fullstack web dev,
          amateur artist and cinema lover based in Porto. I love to think
          outside the box and find creative solutions for all my projects. I
          also really like to make digital illustrations, especially I like to
          create my own Pokémon. <br />I wish to learn more about web
          development and UI/UX so i can become even better.
        </p>
        <p
          class="text-xl text-white  font-normal xs:w-72 sm:w-100 text-justify pt-10"
        >
          <span class="text-xl text-theme-primary font-bold uppercase "
            >School</span
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
      .
    </div>

    <div
      class="ticker-wrap mb-32 flex justify-center items-center w-screen h-auto"
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
        Here you can see some of, what i consider, my best projects. The
        majority of them are applications that I developed during my graduation,
        hope you like it as much as I do. You can find more of my work on my
        <a
          href="http://www.behance.net/brunojusta98"
          target="_blank"
          class="text-xl text-theme-primary font-bold uppercase cursor-pointer "
          >BEHANCE </a
        >.
      </p>
    </div>
    <transition name="fade">
      <div
        v-if="seen"
        class=" h-full fixed w-full z-30 bg-black bg-opacity-50 top-0 left-0 flex flex-col justify-center items-center cursor-pointer transition duration-500 ease-in-out"
      >
        <div class="w-3/4 h-auto bg-theme-back bg-opacity-90 p-5">
          <div
            class="bg-theme-primary  hover:bg-white  text-white hover:text-black w-22 h-auto mb-8 mt-4 ml-4 flex justify-center items-center"
          >
            <a
              @click="closeModal()"
              class="md:inline-flex md:w-auto w-full h-auto px-2 py-2  text-xl font-semibold font-poppins items-center justify-center lowercase"
            >
              back to projects
            </a>
          </div>
          <div class="flex p-4">
            <div
              v-if="selected.id != 2"
              :style="{
                'background-image': 'url(' + selected.src + ')',
              }"
              class="flex mb-5 w-full h-70 bg-cover bg-center shadow-lg"
            ></div>
            <div class="relative flex flex-col items-start h-auto w-full ml-10">
              <h2
                class="text-5xl text-theme-primary lowercase font-poppins font-bold mb-5"
              >
                {{ selected.title }}
              </h2>

              <p
                v-if="selected.id != 2"
                class="text-xl text-white lowercase font-thin text-justify  mb-24"
              >
                {{ selected.description }}
              </p>
              <p
                v-if="selected.id == 2"
                class="text-xl text-white lowercase font-thin text-justify  mb-12"
              >
                {{ selected.description }}
              </p>
              <iframe
                v-if="selected.id == 2"
                class="self-center"
                width="860"
                height="515"
                src="https://www.youtube.com/embed/Gn9EhKnrrZQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div
                v-if="selected.id != 2 && selected.id != 5 && selected.id != 3"
                class="bg-theme-primary hover:bg-white  text-white hover:text-black  w-auto absolute bottom-0 right-0 h-auto"
              >
                <a
                  target="_blank"
                  :href="selected.url"
                  class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 text-xl font-semibold font-sans items-center justify-center lowercase"
                >
                  see more on Behance
                </a>
              </div>
              <div
                v-if="selected.id == 5"
                class="bg-theme-primary hover:bg-white  text-white hover:text-black  w-auto absolute bottom-0 right-0 h-auto"
              >
                <a
                  href="https://ondisplay-zeta.vercel.app/"
                  target="_blank"
                  class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 text-xl font-semibold font-sans items-center justify-center lowercase"
                >
                  also check the landing page
                </a>
              </div>
              <div
                v-if="selected.id == 5"
                class="bg-theme-primary hover:bg-white  text-white hover:text-black  w-auto absolute bottom-0 right-auto h-auto"
              >
                <a
                  href="https://app.ondisplay.pt/watch/98nOLbZpR2rUCbgdCTaH"
                  target="_blank"
                  class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 text-xl font-semibold font-sans items-center justify-center lowercase"
                >
                  watch it live
                </a>
              </div>
              <div
                v-if="selected.id == 3"
                class="bg-theme-primary hover:bg-white  text-white hover:text-black  w-auto absolute bottom-0 right-0 h-auto"
              >
                <a
                  href="  https://trabalhos.esmad.ipp.pt/tsiw/20-21/nes/wp_group02/"
                  target="_blank"
                  class="md:inline-flex md:w-auto w-full h-auto px-2 py-2 text-xl font-semibold font-sans items-center justify-center lowercase"
                >
                  check it out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div
      class="xs:flex xs:flex-col md:grid  md:grid-cols-2  md:gap-24 justify-center items-center"
    >
      <div
        v-for="p in projects"
        :key="p.id"
        class="relative flex-col items-start xs:w-72 md:w-100 opacity-75 hover:opacity-100 text-white hover:text-theme-primary transition duration-500 ease-in-out xs:mb-20 sm:mb-0"
      >
        <div
          class="projectCard relative xs:w-72 md:w-100 xs:h-64 md:h-70 object-cover  transition duration-500 ease-in-out flex justify-center items-center"
        >
          <img
            class="absolute h-full  w-full object-cover"
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

    <div
      class="text-white text-8xl font-semibold font-poppins mt-52 mb-24 lowercase xs:self-center md:self-start flex"
    >
      <h2 class="mr-4">let's get in</h2>
      <a
        href="mailto:brunomajusta@gmail.com"
        class="text-theme-primary hover:text-white hover:underline mr-2  transition duration-500 ease-in-out"
      >
        touch
      </a>
      .
    </div>

    <div class="flex w-full flex-wrap justify-around ">
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
            class="feather feather-github mb-1 mr-2"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          GITHUB
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
            class="feather feather-linkedin mb-2 mr-2"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LINKEDIN
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
            class="fill-current mb-1 mr-2 "
          >
            <path
              d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
            /></svg
          >BEHANCE
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
            class="feather feather-instagram mr-2"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          INSTAGRAM
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
            class="feather feather-mail mr-2 "
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          E-MAIL
        </a>
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
    seen: false,
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
      url: "https://www.behance.net/gallery/112731319/Tetris",
      description:
        "This project was developed in the second year of my degree. It consisted in the development of a Tetris game, which has two game modes: single player and multiplayer. The game was developed with the programming languages ​​HTML5, CSS3 and JavaScript.",
    },
    projects: [
      {
        id: 0,
        title: "Tetris",
        src: tetris,
        url: "https://www.behance.net/gallery/112731319/Tetris",
        description:
          "This project was developed in the second year of my degree. It consisted in the development of a Tetris game, which has two game modes: single player and multiplayer. The game was developed with the programming languages ​​HTML5, CSS3 and JavaScript.",
      },
      {
        id: 1,
        title: "Impetus - Innovation",
        src: impetus,
        url: "https://www.behance.net/gallery/86104597/Landing-Page",
        description:
          "I did a Summer Internship at Impetus Portugal - têxteis SA. and there I was challenged to make a landing page for the Innovation collection. This was after my first year of degree and i used HTML5, CSS3 and JavaSctipt to achive this result, i also used the parallax effect on the page.",
      },
      {
        id: 2,
        title: "Winehead factory",
        src: winehead,
        description:
          "The animation presented was created in Cinema 4D and presents a wine bottle production factory. “Winehead” bottles are created on a machine with special characteristics, allowing them to come to life. Each time the machine produces a bottle, it circulates under a conveyor belt. After its route on the carpet, the bottle falls, breaking into small pieces of glass that accumulate on the floor, where later they end up being reused to make more “Wineheads”. The factory works like this in a kind of Loop",
      },
      {
        id: 3,
        title: "Pointer",
        src: pointer,
        description:
          "The e-commerce platform presented in this project was created in WordPress with the purpose of selling collars and vests for dogs and cats, wich are customizable with various patterns and colours, as well as with the name of the animal and even a QR code with all the information of the animal and its owner. In addition, the collar/vest comes with the possibility of nringing a built-in tracker to always know where the animal is.",
      },
      {
        id: 4,
        title: "Fcm tour",
        src: fcm,
        url:
          "https://www.behance.net/gallery/111220747/FCM-TOUR-UIUX-APP-Fundacao-Cupertino-de-Miranda",
        description:
          "This mobile application is a proposal of a functional prototype for the Cupertino de Miranda Foundation (FCM) based in Famalicão. with this application it's intended to assist the visit to the Literary Tower with an audio guide and also to let users see a little bit more about thee FCM in a more interactive way. This project was built in Android Studio.",
      },
      {
        id: 5,
        title: "Ondisplay",
        src: ondisplay,
        description:
          "The main objective of this project was the development of the entire front-end layer of the OnDisplay platform, which allows the creation, management, customization and presentation of different Digital Signage Screens, as well as the development of a landing page to present the product. This application was made in Vue and the landing page in next.js.",
      },
    ],
  }),
  created() {
    this.selected = null;
  },
  computed: {},
  methods: {
    showMore(id) {
      this.seen = !this.seen;
      this.selected = this.projects[id];
    },
    closeModal() {
      this.selected = null;
      this.seen = !this.seen;
    },
  },
};
</script>
