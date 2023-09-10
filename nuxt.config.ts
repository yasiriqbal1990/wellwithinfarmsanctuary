// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  alias:{
    "@":resolve(__dirname,"/")
  },
  css:[
    '@fortawesome/fontawesome-svg-core/styles.css',
    "~/assets/css/main.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    //styleLang: 'css',
    modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  ssr: false


})
