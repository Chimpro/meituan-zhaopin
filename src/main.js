import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import Navigate from '@/pages/Navigate.vue'
import Footer from '@/pages/Footer.vue'
import './style/reset.scss'
//阿里矢量图标
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.component('Navigate', Navigate)
app.component('Footer', Footer)

app.mount('#app')
