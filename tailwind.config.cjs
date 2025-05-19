/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        card: 'var(--bg-card)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        border: 'var(--border-color)',
        accent: 'var(--accent-color)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--text-primary)',
            a: {
              color: 'var(--accent-color)',
              '&:hover': {
                color: 'var(--accent-color)',
              },
            },
            h1: {
              color: 'var(--text-primary)',
            },
            h2: {
              color: 'var(--text-primary)',
            },
            h3: {
              color: 'var(--text-primary)',
            },
            h4: {
              color: 'var(--text-primary)',
            },
            blockquote: {
              color: 'var(--text-secondary)',
              borderLeftColor: 'var(--border-color)',
            },
            code: {
              color: 'var(--accent-color)',
            },
            pre: {
              backgroundColor: 'var(--bg-secondary)',
            },
            strong: {
              color: 'var(--text-primary)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    // 如果需要排版插件，请手动安装： npm install -D @tailwindcss/typography
    // require('@tailwindcss/typography'),
  ],
}