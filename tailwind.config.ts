import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        BluePrimary: "#0bb0e6",
        
        GrayCard: "#202023",
        GrayP: "#151518",
        GrayT: "#59608B",
        GreenT: "#00B48F"
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], // Adiciona Poppins como a fonte padrão
      },
    },
  },
  plugins: [],
};
export default config;
