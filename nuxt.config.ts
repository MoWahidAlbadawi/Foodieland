export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'vuetify-nuxt-module','@nuxtjs/google-fonts'],
  css: ['/assets/mian.css'],
  ssr: true,

  // this for support vercel settings for deployment on vercel
  nitro : {
    preset : 'vercel'
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700] 
    },
    display: 'swap'
  },

  app : {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
      }
    ]
  }
},

  compatibilityDate: '2025-04-29'
});