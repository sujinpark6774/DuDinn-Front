import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

// axios 설정
app.config.globalProperties.$axios = axios;

// Bootstrap 설정
app.use(BootstrapVue3)

app.mount('#app')
