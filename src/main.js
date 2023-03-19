import 'devextreme/dist/css/dx.light.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import router from './router'
import 'devextreme/dist/css/dx.light.css';


const pinia = createPinia()
const app = createApp(App)
library.add(fas)
library.add(fab)
library.add(far)

app.use(pinia)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')
