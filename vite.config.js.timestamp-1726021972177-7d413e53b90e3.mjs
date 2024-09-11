// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/Star-Universe/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/Star-Universe/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///F:/Star-Universe/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///F:/Star-Universe/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///F:/Star-Universe/vite.config.js";
var vite_config_default = defineConfig({
  base: "/Star-Universe/",
  // github仓库名称
  plugins: [
    vue(),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
      resolvers: [AntDesignVueResolver({
        importStyle: false
        // css in js
      })]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
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
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxTdGFyLVVuaXZlcnNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxTdGFyLVVuaXZlcnNlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9TdGFyLVVuaXZlcnNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy9cdTgxRUFcdTUyQThcdTVCRkNcdTUxNjV1aS1cdTdFQzRcdTRFRjYgXHU2QkQ0XHU1OTgyXHU4QkY0YW50LWRlc2lnbi12dWUgIGVsZW1lbnQtcGx1c1x1N0I0OVxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG4vL2FudC1kZXNpZ24tdnVlXG5pbXBvcnQgeyBBbnREZXNpZ25WdWVSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIlxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy9TdGFyLVVuaXZlcnNlLycsIC8vIGdpdGh1Ylx1NEVEM1x1NUU5M1x1NTQwRFx1NzlGMFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvL2FudC1kZXNpZ24tdnVlICAgaW1wb3J0U3R5bGUgPSBmYWxzZSBcdTY4MzdcdTVGMEZcdTVDMzFcdTZDQTFcdTRFODZcbiAgICAgIHJlc29sdmVyczogW0FudERlc2lnblZ1ZVJlc29sdmVyKHtcbiAgICAgICAgaW1wb3J0U3R5bGU6IGZhbHNlIC8vIGNzcyBpbiBqc1xuICAgICAgfSldLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG4gIC8vIGNzczoge1xuICAvLyAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgLy8gICAgIGxlc3M6IHtcbiAgLy8gICAgICAgbW9kaWZ5VmFyczoge1xuICAvLyAgICAgICAgIGhhY2s6IGB0cnVlOyBAaW1wb3J0IChyZWZlcmVuY2UpIFwiJHtwYXRoLnJlc29sdmUoJ3NyYy9hc3NldHMvYmFzZS5sZXNzJyl9XCI7YFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc08sU0FBUyxlQUFlLFdBQVc7QUFFelEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBR2hCLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsNEJBQTRCO0FBUnNHLElBQU0sMkNBQTJDO0FBVzVMLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBO0FBQUEsTUFFVCxXQUFXLENBQUMscUJBQXFCO0FBQUEsUUFDL0IsYUFBYTtBQUFBO0FBQUEsTUFDZixDQUFDLENBQUM7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
