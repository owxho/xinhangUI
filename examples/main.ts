import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import XinUI from '../packages/index'
const app = createApp(App)
app.use(XinUI).mount('#app')