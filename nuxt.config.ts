// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,maximum-scale=1,minimum-scale=1,initial-scale=1',
      title: 'Rise',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        {
          name: 'description',
          content: 'Somos uma growth delivery marketing que entrega resultados reais e tangíveis em suas estratégias de negócios.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Rise'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Somos uma growth delivery marketing que entrega resultados reais e tangíveis em suas estratégias de negócios.'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/opengraph.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://risead.com.br/'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@nuxt_js'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://risead.com.br/'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Rise'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Somos uma growth delivery marketing que entrega resultados reais e tangíveis em suas estratégias de negócios.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/opengraph.png'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [],
  css:[
		'@/assets/css/main.css'
	]
})