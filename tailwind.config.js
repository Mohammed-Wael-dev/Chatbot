/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainbg: 'var(--background-color)',
        textbg: 'var(--text-bg)',
        textcolor: 'var(--text-color)',
        logo: 'var(--logo-bg)',
        border: 'var(--border-color)'
      },
    },
  },
  plugins: [],
}

