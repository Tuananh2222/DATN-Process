import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import { createRouter, createWebHistory } from 'vue-router'
// import {HomeSCreen} from '@/pages/homeScreen.vue'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//       {
//         path: '/',
//         name: 'Home',
//         component: HomeSCreen
//       }
//     ]
//   })

library.add(fas)
library.add(fab)
library.add(far)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
