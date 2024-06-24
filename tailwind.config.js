/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      'mono': ['IBM Plex Mono', 'system-ui', 'monospace']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pink': '#FF007A',
      'blue': '#0000FF',
      'light-blue': '#00C9D4',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    screens: {
      md: { 'max': '1024px' },
      sm: { 'max': '640px' }
    },
    extend: {
      padding: {
        'md': '48px',
        'sm': '24px'
      },
      transitionDuration: {
        'default': '300ms'
      }
    }
  }
}

