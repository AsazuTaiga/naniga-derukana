import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestion, faUndo } from "@fortawesome/free-solid-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

library.add(faQuestion, faUndo, faSoundcloud);
Vue.component("v-fa", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
