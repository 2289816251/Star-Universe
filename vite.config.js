import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
//ant-design-vue
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Star-Universe/', // github仓库名称
  plugins: [
    vue(),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
      resolvers: [AntDesignVueResolver({
        importStyle: false // css in js
      })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true; @import (reference) "${path.resolve('src/assets/base.less')}";`
  //       },
  //       javascriptEnabled: true
  //     }
  //   }
  // }
})
