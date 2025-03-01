import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '380px',    
        sm: '640px',    
        md: '768px',   
        lg: '1024px', 
        xl: '1280px',  
        '2xl': '1536px',  
        '3xl': '1800px', 
      },
    },
  },
  plugins: [],
} satisfies Config;
