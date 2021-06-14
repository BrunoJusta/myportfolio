import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuelidate from "./plugins/vuelidate";
import "./assets/styles/style.scss";
import "./assets/styles/tailwind.css";
import moment from "moment";
import MarqueeText from "vue-marquee-text-component";

Vue.config.productionTip = false;

Vue.prototype.moment = moment;
Vue.component("marquee-text", MarqueeText);

new Vue({
  router,
  vuelidate,
  store,
  render: (h) => h(App),
}).$mount("#app");
