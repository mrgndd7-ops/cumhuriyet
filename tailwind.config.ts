import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Main Trust Carrier
        "primary": "#1d2b3e",
        "on-primary": "#ffffff",
        "primary-container": "#334155",
        "on-primary-container": "#9eadc5",
        "primary-fixed": "#d5e3fd",
        "primary-fixed-dim": "#b9c7e0",
        "on-primary-fixed": "#0d1c2f",
        "on-primary-fixed-variant": "#3a485c",
        // Secondary — Urgency/Alert Red (use sparingly)
        "secondary": "#b51a1e",
        "on-secondary": "#ffffff",
        "secondary-container": "#d93633",
        "on-secondary-container": "#fffbff",
        "secondary-fixed": "#ffdad6",
        "secondary-fixed-dim": "#ffb4ac",
        "on-secondary-fixed": "#410003",
        "on-secondary-fixed-variant": "#93000e",
        // Tertiary
        "tertiary": "#1d2b3d",
        "tertiary-container": "#334154",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#9eadc4",
        "tertiary-fixed": "#d5e3fc",
        "tertiary-fixed-dim": "#b9c7df",
        "on-tertiary-fixed": "#0d1c2e",
        "on-tertiary-fixed-variant": "#3a485b",
        // Surface Hierarchy (Nested Depth Model)
        "surface": "#f7f9fb",
        "surface-dim": "#d8dadc",
        "surface-bright": "#f7f9fb",
        "surface-tint": "#515f74",
        "surface-variant": "#e0e3e5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#eceef0",
        "surface-container-high": "#e6e8ea",
        "surface-container-highest": "#e0e3e5",
        // Background & On-surface
        "background": "#f7f9fb",
        "on-background": "#191c1e",
        "on-surface": "#191c1e",
        "on-surface-variant": "#44474c",
        // Outline
        "outline": "#75777d",
        "outline-variant": "#c5c6cd",
        // Error
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        // Inverse
        "inverse-surface": "#2d3133",
        "inverse-on-surface": "#eff1f3",
        "inverse-primary": "#b9c7e0",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "headline-lg": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "headline-md": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "headline-sm": ["1.5rem", { lineHeight: "1.35" }],
        "title-lg": ["1.375rem", { lineHeight: "1.4" }],
        "title-md": ["1.125rem", { lineHeight: "1.45" }],
        "title-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["1rem", { lineHeight: "1.6" }],
        "body-md": ["0.875rem", { lineHeight: "1.6" }],
        "body-sm": ["0.75rem", { lineHeight: "1.5" }],
        "label-lg": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        "label-md": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.03em" }],
        "label-sm": ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        "ambient": "0 16px 32px rgba(29, 43, 62, 0.06)",
        "ambient-sm": "0 4px 16px rgba(29, 43, 62, 0.04)",
        "ambient-lg": "0 24px 48px rgba(29, 43, 62, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
