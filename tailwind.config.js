import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", ".dark"],
  content: ["./index.html", "./client/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        background: "hsl(222 47% 8%)",
        foreground: "hsl(210 40% 98%)",

        card: {
          DEFAULT: "hsl(222 47% 11%)",
          foreground: "hsl(210 40% 98%)",
        },
        popover: {
          DEFAULT: "hsl(222 47% 11%)",
          foreground: "hsl(210 40% 98%)",
        },
        primary: {
          DEFAULT: "hsl(216, 59%, 39%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(217 32% 17%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217 32% 20%)",
          foreground: "hsl(215 20% 70%)",
        },
        accent: {
          DEFAULT: "hsl(217, 37%, 24%)",
          foreground: "hsl(210 40% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 72% 51%)",
          foreground: "hsl(210 40% 98%)",
        },

        border: "hsl(217 32% 20%)",
        input: "hsl(217 32% 20%)",
        ring: "hsl(216, 59%, 39%)",

        sidebar: {
          DEFAULT: "hsl(222 47% 10%)",
          foreground: "hsl(210 40% 98%)",
          primary: "hsl(216, 59%, 39%)",
          "primary-foreground": "hsl(210 40% 98%)",
          accent: "hsl(217 32% 17%)",
          "accent-foreground": "hsl(210 40% 98%)",
          border: "hsl(217 32% 20%)",
          ring: "hsl(216, 59%, 39%)",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },

  plugins: [animate, typography],
};
