/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: 'var(--surface)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'accent-strong': 'var(--accent-strong)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(108, 207, 246, 0.35), 0 20px 60px rgba(76, 163, 255, 0.22)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, rgba(108, 207, 246, 0.9), rgba(170, 123, 255, 0.8))',
      },
    },
  },
  plugins: [],
};

