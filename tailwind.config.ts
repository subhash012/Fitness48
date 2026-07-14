import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./backend/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070707",
        surface: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.12)",
        text: "#F5F5F5",
        muted: "#A1A1AA",
        accent: "#E11D48"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(225,29,72,0.22), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 20%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;