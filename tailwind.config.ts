import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				sky: {
					1: "#F3F9FF",
					2: "#F5F5F5",
					3: "#F7FAFB",
					4: "#F0F0F0",
					5: "#EEEEEE",
					6: "#E9E9E9",
					7: "#F7F7F7",
					8: "#DADADA",
					9: "#EEF0EE",
					10: "#F8F8F8",
					11: "#F4F4F4",
					12: "#E6E6E6",
					13: "#FDFCFC",
					14: "#E9E9E9",
				},
				gray: {
					1: "#888888",
					2: "#6C6B6B",
					3: "#504F4F",
					4: "#848484",
					5: "#3B3B47",
					6: "#727272",
					7: "#4B4B4B",
					8: "#C1C0C0",
					9: "#AFAFAF",
					10: "#D5D8DD",
					11: "#575757",
					12: "#C7C7C7",
				},
				dark: {
					1: "#1B1B1B",
				},
				green: {
					1: "#07D447",
					2: "#1DC11D",
					3: "#DBFBE5",
					4: "#00A133",
					5: "#04F774",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
