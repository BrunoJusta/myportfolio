<template>
  <div class="flex flex-col justify-center items-center max-w-screen-xxl px-8">
    <div
      class="flex text-white xs:text-2xl sm:text-5xl lg:text-6xl xs:self-center xxl:self-start  font-semibold font-poppins xs:mb-10 md:mb-24 lowercase"
    >
      <h2 class="mr-4">some of my best</h2>
      <h2 class="text-theme-primary boingHover">
        work
      </h2>
      .
    </div>
    <div class="xs:self-center xl:self-start">
      <p
        class="text-xl text-white  font-poppins font-normal xs:w-72 sm:w-120 xl:w-full text-justify"
      >
        Here you can see some of, what i consider, my best projects. The
        majority of them are applications that I developed during my graduation,
        hope you like it as much as I do. You can find more of my work on my
        <a
          href="http://www.behance.net/brunojusta98"
          rel="noopener"
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
                class="self-center xs:hidden lg:block md:hidden"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Gn9EhKnrrZQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                v-if="selected.id == 2"
                class="self-center xs:block lg:hidden md:block"
                width="460"
                height="275"
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
                  rel="noopener"
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
                  rel="noopener"
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
                  rel="noopener"
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
      class="xs:flex xs:flex-col xl:grid  xl:grid-cols-2  xl:gap-24 mb-56 justify-center items-center"
    >
      <div
        v-for="p in projects"
        :key="p.id"
        class="relative flex-col items-start xs:w-72 md:w-100 opacity-75 hover:opacity-100  text-white hover:text-theme-primary transition duration-500 ease-in-out xs:mb-20 sm:mb-8 xl:mb-0"
      >
        <div
          class="projectCard relative xs:w-72 md:w-100 xs:h-64 md:h-70 object-cover  transition duration-500 ease-in-out flex justify-center items-center"
        >
          <img
            class="absolute h-full  w-full object-cover"
            :src="p.src"
            :alt="p.title"
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
          class="w-full xs:text-2xl md:text-4xl absolute font-poppins font-semibold z-10 transition  ease-in-out uppercase "
        >
          {{ p.title }}
        </p>
      </div>
    </div>
    <div
      class="flex text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl xs:self-center xxl:self-start  font-semibold font-poppins mb-24 lowercase"
    >
      <h2 class="mr-4">Let's get in</h2>
      <a
        href="mailto:brunomajusta@gmail.com"
        class="text-theme-primary hover:text-white hover:underline   transition duration-500 ease-in-out"
      >
        touch
      </a>
      .
    </div>
  </div>
</template>

<script>
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
        url:
          "https://www.youtube.com/watch?v=Gn9EhKnrrZQ&ab_channel=BrunoJusta",
        description:
          "The animation presented was created in Cinema 4D and presents a wine bottle production factory. “Winehead” bottles are created on a machine with special characteristics, allowing them to come to life. Each time the machine produces a bottle, it circulates under a conveyor belt. After its route on the carpet, the bottle falls, breaking into small pieces of glass that accumulate on the floor, where later they end up being reused to make more “Wineheads”. The factory works like this in a kind of Loop",
      },
      {
        id: 3,
        title: "Pointer",
        src: pointer,
        url: "https://trabalhos.esmad.ipp.pt/tsiw/20-21/nes/wp_group02/",
        description:
          "The e-commerce platform presented in this project was created in WordPress with the purpose of selling collars and vests for dogs and cats, wich are customizable with various patterns and colours, as well as with the name of the animal and even a QR code with all the information of the animal and its owner. In addition, the collar/vest comes with the possibility of bringing a built-in tracker to always know where the animal is.",
      },
      {
        id: 4,
        title: "Fcm tour",
        src: fcm,
        url:
          "https://www.behance.net/gallery/111220747/FCM-TOUR-UIUX-APP-Fundacao-Cupertino-de-Miranda",
        description:
          "This mobile application is a proposal of a functional prototype for the Cupertino de Miranda Foundation (FCM) based in Famalicão. with this application it's intended to assist the visit to the Literary Tower with an audio guide and also to let users see a little bit more about the FCM in a more interactive way. This project was built in Android Studio.",
      },
      {
        id: 5,
        title: "Ondisplay",
        src: ondisplay,
        url: "https://ondisplay-zeta.vercel.app/",
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
      if (screen.width < 768) {
        window.open(this.projects[id].url, "_blank").focus();
      } else {
        this.seen = !this.seen;
        this.selected = this.projects[id];
      }
    },
    closeModal() {
      this.selected = null;
      this.seen = !this.seen;
    },
  },
};
</script>
