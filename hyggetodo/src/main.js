import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/style.css'
import './assets/faw/fontawesome/all.css'

const app = createApp(App)

app.use(router)

app.mount('#app')