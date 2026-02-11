/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", ".dark"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],

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

        primary: {
          DEFAULT: "hsl(217 91% 60%)",
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

        border: "hsl(217 32% 20%)",
        input: "hsl(217 32% 20%)",
        ring: "hsl(217 91% 60%)",

        /* Gradient helper colors */
        blueStart: "#2563eb",
        blueMid: "#3b82f6",
        blueEnd: "#60a5fa",
      },

      backgroundImage: {
        /* Main hero gradient */
        "gradient-blue":
          "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)",

        /* Dark subtle gradient for cards */
        "gradient-dark":
          "linear-gradient(180deg, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 100%)",

        /* Radial glow */
        "gradient-radial-blue":
          "radial-gradient(circle at center, rgba(59,130,246,0.35) 0%, rgba(0,0,0,0) 70%)",
      },

      boxShadow: {
        "blue-glow": "0 0 40px rgba(59,130,246,0.35)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },

      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
