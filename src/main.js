import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Button, Row, Col } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import Mock from 'mockjs';
import './mock'; // 引入Mock.js配置文件

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button).use(Row).use(Col)

app.mount('#app')

if (process.env.NODE_ENV === 'development') {
    // Mock.start(); // 在开发环境中启用Mock.js
    Mock.setup({
      timeout: '100-200', // 设置响应时间随机范围
    });
  }