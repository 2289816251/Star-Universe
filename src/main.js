import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { Button, Row, Col } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// 引入mockjs
import Mock from 'mockjs';
import './mock'; // 引入Mock.js配置文件

// 引入vue3-lazyload - 图片懒加载
import VueLazyLoad from 'vue3-lazyload'
import loadingImage from '@/assets/images/loading.gif'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(Button).use(Row).use(Col)
app.use(VueLazyLoad, {
  loading: loadingImage,
  error: '',
  lifecycle: {
    loading: (el) => {
      // console.log('loading', el)
    },
    error: (el) => {
      // console.log('error', el)
    },
    loaded: (el) => {
      // console.log('loaded', el)
    }
  }
})

app.mount('#app')

if (process.env.NODE_ENV === 'development') {
    // Mock.start(); // 在开发环境中启用Mock.js
    Mock.setup({
      timeout: '100-200', // 设置响应时间随机范围
    });
  }