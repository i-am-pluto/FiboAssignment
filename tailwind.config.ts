import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '3xs': ['11px', '14px'],
      '2xs': ['12px', '16px'],
      xs: ['13px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '36px'],
      '3xl': ['32px', '40px'],
      '4xl': ['36px', '48px'],
      '5xl': ['40px', '52px'],
      '6xl': ['72px', '80px'],
      '7xl': ['96px', '104px'],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1/2': '0.5px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
    },
    extend: {
      zIndex: {
        '80': '80',
        '100': '100',
      },
      fontFamily: {
        sans: ['var(--font-eb-garamond)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      rotate: {
        '15': '15deg',
        '14': '14deg',
        '17': '17deg',
      },
      colors: {
        'theme-blue': '#3025b1',
        transparent: 'transparent',
        'contact-text': '#7c8db5',
        'contact-bg': '#fafafa',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'gray': '#dddddd',
        'gray-dark': '#888888',
        'gray-darker': '#111827',
        'gray-light': '#e5e7eb',
        'gray-lighter': '#f3f4f6',
        'red': '#ef4444',
        'orange': '#f97316',
        'yellow': '#f59e0b',
        'green': '#10b981',
        'teal': '#14b8a6',
        'blue': '#3b82f6',
        'indigo': '#6366f1',
        'purple': '#8b5cf6',
        'pink': '#ec4899',
        'blue-gray': '#e7e9f0',
        'whatsapp-green': '#25D366',
        'creme': '#F5F5F5'
      },  
      spacing: {
        'quarter': '0.0625rem',
        'half': '0.125rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        ...(() => {
          const heightClasses: { [key: string]: string } = {};
          for (let i = 4; i <= 360; i += 4) {
            heightClasses[`${i}`] = `${i / 4}rem`;
          }
          return heightClasses;
        })(),
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
