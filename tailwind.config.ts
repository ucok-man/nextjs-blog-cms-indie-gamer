/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },

      boxShadow: {
        "brand-y-md": "0 4px",
        "brand-y-lg": "0 6px",
        "brand-x-md": "4px 0",
        "brand-x-lg": "4px 0",
        "brand-br-md": "4px 4px",
        "brand-br-lg": "6px 6px",
      },

      translate: {
        "brand-md": "4px",
        "brand-lg": "6px",
      },

      fontFamily: {
        firaCode: "var(--fonts-fira-code)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "brand-pink": {
          "50": "#fef1f9",
          "100": "#fee5f4",
          "200": "#feccea",
          "300": "#ffb6e1",
          "400": "#fe68bd",
          "500": "#f83ca2",
          "600": "#e81a7f",
          "700": "#ca0c64",
          "800": "#a70d52",
          "900": "#8b1047",
          "950": "#550227",
        },
        "brand-white": {
          "50": "#f8f8f8",
          "100": "#f0f0f0",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
        "brand-green": {
          "50": "#f8ffe4",
          "100": "#eeffc4",
          "200": "#ddff90",
          "300": "#c3ff50",
          "400": "#b4ff39",
          "500": "#89e600",
          "600": "#69b800",
          "700": "#4f8b00",
          "800": "#406d07",
          "900": "#375c0b",
          "950": "#1a3400",
        },
        "brand-eunry": {
          "50": "#faf6f6",
          "100": "#f6eaea",
          "200": "#eedada",
          "300": "#e2bfbf",
          "400": "#d4a4a4",
          "500": "#bb7878",
          "600": "#a55d5d",
          "700": "#8a4b4b",
          "800": "#734141",
          "900": "#613b3b",
          "950": "#331c1c",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
