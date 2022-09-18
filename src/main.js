import { createApp } from 'vue'
import App from './App.vue'
// import MUI from "../packages/index.js";
import MUI from 'clear-mui'
const app = createApp(App)
app.use(MUI)
app.mount('#app')
