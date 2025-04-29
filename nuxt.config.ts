export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'vuetify-nuxt-module','@nuxtjs/google-fonts'],
  css: ['/assets/mian.css'],
  ssr: true,
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
}
});
