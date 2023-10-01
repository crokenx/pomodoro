/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // content: {
    // enabled: true,
    // enabled: process.env.TAILWIND_MODE === 'build',
  //   content: ['./src/**/*.{html,ts}']
  // },
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{html,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Merriweather', 'serif'],
    }
  },
  variants: {},
  plugins: [],
};
