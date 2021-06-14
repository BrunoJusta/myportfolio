<template>
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-white text-5xl self-center mb-20">PROJECTS</h2>
    <div class="flex justify-center items-center">
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "@/components/WeatherForm.vue";

export default {
  components: {
    Button,
  },
  data: () => ({ selected: null }),
  created() {},
  computed: {},
  methods: {},
};
</script>
