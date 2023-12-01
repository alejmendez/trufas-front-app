/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

export default {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite
  ],
  darkMode: 'class',
}

