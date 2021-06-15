<template>
  <div id="app" class="min-h-screen" style="background-color:#222831">
    <div class="flex min-h-screen">
      <div class="w-full ">
        <!--   <UserBar
          :currentPlace="$router.currentRoute.meta.title"
          v-if="!isWatchView"
        /> -->
        <div>
          <router-view :class="!isWatchView ? 'p-0' : ''" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import UserBar from "@/components/ui/UserBar.vue"; */

import { mapGetters } from "vuex";
export default {
  components: {
    /*     UserBar, */
  },
  data: () => ({
    isWatchView: false,
  }),
  watch: {
    $route(newVal) {
      newVal.name === "Watch"
        ? (this.isWatchView = true)
        : (this.isWatchView = false);
    },
  },
};
</script>

<style lang="scss">
#page {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "imgs logo"
    "imgs  weather"
    "imgs  clock";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: imgs;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: logo;
  background-color: #ffa08c;
}

#page > main {
  grid-area: weather;
  background-color: #ffff64;
}

#page > footer {
  grid-area: clock;
  background-color: #8cffa0;
}
</style>
