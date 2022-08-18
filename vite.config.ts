import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import iconify from '@iconify-json/ic'
import Unocss from "./config/unocss";
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins:[vue(),vueJsx({
}), Unocss()
],
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "EmulunUI",
      fileName: "emulun-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
})