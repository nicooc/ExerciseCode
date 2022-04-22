import { createApp } from 'vue'
import App from './App.vue'
//路由配置
import routerConfig from "./config/router.config.js"
const router = routerConfig;
//样式表
import "./assets/sass/index.scss"
//ui
import TDesign from 'tdesign-mobile-vue';

createApp(App).use(router).use(TDesign).mount('#app')
