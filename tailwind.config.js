import colors from 'tailwindcss/colors'
export default {
	content: [
		'./src/**/*.{scss,js,ts,jsx,tsx}',
		'node_modules/@frostui/tailwindcss/dist/*.js',
	],
	darkMode: ['class'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '1rem',
				lg: '1rem',
				xl: '3rem',
				'2xl': '6rem',
			},
		},

		fontFamily: {
			body: ['Be Vietnam Pro', 'sans-serif'],
		},

		extend: {
			colors: {
				primary: '#080942',
				secondary: '#1F2054',
			},
		},
	},

	plugins: [
		require('@frostui/tailwindcss/plugin'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
