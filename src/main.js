import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Button, Row, Col } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button).use(Row).use(Col)

app.mount('#app')
