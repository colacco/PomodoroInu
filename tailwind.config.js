/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"highlight": "#BF4124",
				"main-color": "#A65C1C",
				"secondary-color": "#40241A",
				"tertiary-color": "#733C1D",
				"quaternary-color": "#F2A74B"
			},
			fontFamily: {
				"close": ["Fredoka", "sans-serif"]
			},
		}
	},
	plugins: [],
}

