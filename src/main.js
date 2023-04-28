import "devextreme/dist/css/dx.light.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import router from "./router";
import "devextreme/dist/css/dx.light.css";
import "@/css/common.css";
import { firebaseApp } from "./firebaseConfig";
import { VueFire, VueFireAuth } from "vuefire";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const pinia = createPinia();
const app = createApp(App);
library.add(fas);
library.add(fab);
library.add(far);
app.use(pinia);
app.use(router);

app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});
app.use(VCalendar, {})
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
