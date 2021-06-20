<template>
  <div class="relative flex flex-col justify-center ">
    <div class="background w-screen "></div>
    <div class="flex flex-col justify-center items-center">
      <Header />
      <About />
      <Hobbies />
      <Work />
      <Contacts />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Hobbies from "@/components/Hobbies.vue";
import Work from "@/components/Work.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  components: {
    Header,
    About,
    Hobbies,
    Work,
    Contacts,
  },
};
</script>
