import './assets/sass/index.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Unicon from 'vue-unicons'
import { uniArrowRight, uniArrowLeft } from 'vue-unicons/dist/icons'

import App from './App.vue'
import router from './router'


const app = createApp(App)
Unicon.add([uniArrowRight, uniArrowLeft])

app.use(createPinia())
app.use(router)
app.use(Unicon)

app.mount('#app')
