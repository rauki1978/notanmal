/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#facc15',
        'brand-purple': '#a855f7',
        'background': '#f9fafb',
        'text-main': '#111827',
        'text-muted': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '4rem',
      },
    },
  },
  plugins: [],
}
