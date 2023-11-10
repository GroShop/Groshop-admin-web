import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      // 'raleway-regular': ['Raleway-Regular'],
      // 'raleway-medium': ['Raleway-Medium'],
      // 'raleway-semi-bold': ['Raleway-SemiBold'],
      // 'raleway-bold': ['Raleway-Bold'],
      // 'merriweather-regular': ['Merriweather-Regular'],
      // 'merriweather-bold': ['Merriweather-Bold'],
      // 'merriweather-light': ['Merriweather-Light'],
      // 'merriweather-thin': ['Merriweather-Thin'],
      // 'merriweather-medium': ['Merriweather-Medium'],
      // 'merriweather-semibold': ['Inter-SemiBold'],
      'DMSans-regular': ['DMSans-Regular'],
      'DMSans-medium': ['DMSans-Medium'],
      'DMSans-semibold': ['DMSans-SemiBold'],
      'DMSans-bold': ['DMSans-Bold'],
      'Inter-regular': ['Inter-Regular'],
      'Inter-medium': ['Inter-Medium'],
      'Inter-semibold': ['Inter-SemiBold'],
      'Inter-bold': ['Inter-Bold'],
    },
    
    colors: {
      'light-gray':'#DADDD8',
      'primary-green': '#689C36',
      'secondary-black': '#191A19',
      'text-gray': '#ACADAC',
      verify: '#8A8A8A',
      'btn-white': '#F2F5F0',
      'input-bg': '#F3F6F2',
      error: '#DF2E2E',
      'light-mode': '#FFFFFF',
      'dark-mode': '#191A19',
      'light-green': '#E6F8D5',
      'neutral-white': '#F7FFFA',
      'product-gray': '#FCFFFD',
      success: '#E6F8D5',
    },
    boxShadow: {
      'inset-custom': '5px 17px 31px -11px #ACADAC',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config;