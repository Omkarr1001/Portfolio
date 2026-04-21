/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive) / <alpha-value>)", foreground: "hsl(var(--destructive-foreground) / <alpha-value>)" },
        muted:  { DEFAULT: "hsl(var(--muted))",  foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover:{ DEFAULT: "hsl(var(--popover))",foreground: "hsl(var(--popover-foreground))" },
        card:   { DEFAULT: "hsl(var(--card))",   foreground: "hsl(var(--card-foreground))" },

        /* ── Prestige Palette ── */
        cyber: {
          dark:    '#07060C',   // near-black base
          darker:  '#0D0B16',   // elevated surface
          cyan:    '#F59E0B',   // AMBER / GOLD — primary accent
          green:   '#7C3AED',   // DEEP VIOLET   — secondary accent
          warning: '#F97316',   // orange
          text:    '#F8F8FF',   // near-white
          muted:   '#71717A',   // zinc-500
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        xl:   "calc(var(--radius) + 4px)",
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
        xs:   "calc(var(--radius) - 6px)",
        '2xl':'16px',
        '3xl':'24px',
      },
      boxShadow: {
        glow:        '0 0 30px rgba(245,158,11,0.25)',
        'glow-lg':   '0 0 60px rgba(245,158,11,0.20)',
        'glow-violet':'0 0 30px rgba(124,58,237,0.25)',
        card:        '0 20px 64px rgba(0,0,0,0.60)',
      },
      keyframes: {
        "accordion-down": { from:{height:"0"}, to:{height:"var(--radix-accordion-content-height)"} },
        "accordion-up":   { from:{height:"var(--radix-accordion-content-height)"}, to:{height:"0"} },
        float:  { "0%,100%":{transform:"translateY(0) translateZ(0)"}, "50%":{transform:"translateY(-14px) translateZ(8px)"} },
        "float-2":{ "0%,100%":{transform:"translateY(0)"}, "50%":{transform:"translateY(-9px)"} },
        shimmer:{ "0%":{backgroundPosition:"-200% 0"}, "100%":{backgroundPosition:"200% 0"} },
        "aurora-1":{ "0%,100%":{transform:"translate(0,0) scale(1)"}, "33%":{transform:"translate(6%,4%) scale(1.12)"}, "66%":{transform:"translate(-4%,6%) scale(0.93)"} },
        "aurora-2":{ "0%,100%":{transform:"translate(0,0) scale(1)"}, "33%":{transform:"translate(-5%,2%) scale(1.07)"}, "66%":{transform:"translate(4%,-5%) scale(0.96)"} },
        "aurora-3":{ "0%,100%":{transform:"translate(0,0) scale(1)"}, "50%":{transform:"translate(-3%,-4%) scale(1.05)"} },
        "spin-slow":{ from:{transform:"rotate(0deg)"}, to:{transform:"rotate(360deg)"} },
        "border-spin":{ "0%":{backgroundPosition:"0% 50%"}, "50%":{backgroundPosition:"100% 50%"}, "100%":{backgroundPosition:"0% 50%"} },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        float:      "float 7s ease-in-out infinite",
        "float-2":  "float-2 9s ease-in-out infinite 1.5s",
        shimmer:    "shimmer 2.5s linear infinite",
        "aurora-1": "aurora-1 22s ease-in-out infinite",
        "aurora-2": "aurora-2 28s ease-in-out infinite",
        "aurora-3": "aurora-3 20s ease-in-out infinite reverse",
        "spin-slow":"spin-slow 35s linear infinite",
        "border-spin":"border-spin 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
