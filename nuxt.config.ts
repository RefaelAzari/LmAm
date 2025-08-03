// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/eslint'
  ],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/assets/css/main.css' }
      ],
      script: [
        { src: '/assets/js/jquery.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/browser.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/breakpoints.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/util.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/main.js', tagPosition: 'bodyClose' }
      ]
    }
  }
})
