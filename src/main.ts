import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from './store'
import { createRouter } from './router'



createApp(App)
.use(createStore())
.use(createRouter())
.mount('#app')
