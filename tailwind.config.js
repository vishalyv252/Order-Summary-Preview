/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'RHD':['Red Hat Display','sans-serif']
      },
      fontSize:{
        'Fixed':'16px'
      },
      screens:{
        'smX':{'max':'321px'},
        'smM':{'max':'376px'},
        'smL':{'max':'426px'},
        'Tablet':{'max':'769px'}
      },
      backgroundColor:{
        'PBlue':'hsl(225, 100%, 94%)',
        'VPBlue':'hsl(225, 100%, 98%)',
        'BBlue':'hsl(245, 75%, 52%)'
      },
      backgroundImage:{
        'Desktop':"url('./src/Components/Images/pattern-background-desktop.svg')",
        'Mobile':"url('./src/Components/Images/pattern-background-mobile.svg')"
      },
      colors:{
        'DEBlue':'hsl(224, 23%, 55%)',
        'DBlue':'hsl(223, 47%, 23%)',
        'BBlue':'hsl(245, 75%, 52%)',
        'VPBlue':'hsl(225, 100%, 98%)'
      }
    },
  },
  plugins: [],
}

