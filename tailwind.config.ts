import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-dm-sans)',
        alt: 'var(--font-bai-jam-juree)',
      },

      colors: {
        primary: {
          blue: {
            100: '#D1E9FF',
            200: '#B2DDFF',
            300: '#84CAFF',
            400: '#53B1FD',
            500: '#2E90FA',
            600: '#1570EF',
            700: '#175CD3',
            800: '#1849A9',
            900: '#194185',
            950: '#102A56',
          },
          gray: {
            100: '#F2F4F7',
            200: '#E4E7EC',
            300: '#D0D5DD',
            400: '#98A2B3',
            500: '#667085',
            600: '#475467',
            700: '#344054',
            800: '#1D2939',
            900: '#0C111D'
          },
          white: {
            100: '#FAFAFA'
          }
        },
        secondary: {
          bluegray: {
            100: '#EAECF5',
            200: '#C8CCE5',
            300: '#9EA5D1',
            400: '#717BBC',
            500: '#4E5BA6',
            600: '#3E4784',
            700: '#363F72',
            800: '#293056',
            900: '#101323',
            950: '#0D0F1C'
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: ['class'],
}
export default config
