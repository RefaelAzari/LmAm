// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Enable Tailwind CSS
  modules: ['@nuxtjs/tailwindcss'],
  
  // App configuration
  app: {
    head: {
      title: 'חשב/ת שכר פרילנסר/ית – דף נחיתה',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'דף נחיתה נקי ומקצועי לחשב/ת שכר עצמאי/ת עם TailwindCSS ואנימציות גלילה.' 
        }
      ],
      link: [
        { 
          rel: 'preconnect', 
          href: 'https://fonts.googleapis.com' 
        },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.gstatic.com', 
          crossorigin: '' 
        },
        { 
          href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap', 
          rel: 'stylesheet' 
        }
      ],
      htmlAttrs: {
        lang: 'he',
        dir: 'rtl'
      }
    }
  },

  // Tailwind CSS configuration
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: { 
            sans: ['Assistant', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Helvetica Neue'] 
          },
          colors: {
            brand: {
              50: '#f6f9ff',
              100: '#eaf1ff', 
              200: '#cfe0ff',
              300: '#a9c6ff',
              400: '#7ba6ff',
              500: '#4d85ff',
              600: '#2f6dff',
              700: '#2155d6',
              800: '#1b46ad',
              900: '#183e93'
            },
            ink: '#0f172a'
          },
          boxShadow: {
            soft: '0 10px 25px rgba(2, 6, 23, 0.06)'
          }
        }
      }
    }
  },

  // CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Build configuration
  build: {
    transpile: []
  },

  // Runtime config
  runtimeConfig: {
    public: {
      // Add any public runtime config here
    }
  }
})
