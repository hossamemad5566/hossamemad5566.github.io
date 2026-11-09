/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Brand cyan, matched to the LinkedIn banner (#5FD4E8). Overrides Tailwind's sky scale site-wide.
      colors: {
        sky: {
          50: '#ECFBFE',
          100: '#D3F6FC',
          200: '#B8F1FA',
          300: '#7FE3F2',
          400: '#5FD4E8',
          500: '#3BC4DC',
          600: '#1FA3BB',
          700: '#1A8094',
          800: '#1A6474',
          900: '#184F5C',
        },
        ink: {
          900: '#071220',
          800: '#0A1A2B',
          700: '#0F2740',
          600: '#1C3D5A',
          500: '#2D6A8E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
