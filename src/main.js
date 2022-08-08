import {createApp} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
// import Axios from 'axios'
// Vue.prototype.$http = Axios
// Axios.defaults.baseURL = "/"
const app = createApp(App)
installElementPlus(app)
app.use(createPinia())
    .use(router)
    .mount('#app')
    