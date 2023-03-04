const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#d2e7f5',
					100: '#b0d2e9',
					200: '#8ebedd',
					300: '#6da9d1',
					400: '#4b95c5',
					500: '#2980b9',
					600: '#216795',
					700: '#194e70',
					800: '#11344c',
					900: '#091b27'
				},
				parker: {
					50: '#58f3e1',
					100: '#48d5c5',
					200: '#38b7a9',
					300: '#279a8c',
					400: '#177c70',
					500: '#075e54',
					600: '#05473f',
					700: '#042f2a',
					800: '#021815',
					900: '#000000'
				}
			},

		}
	},
	plugins: [require('daisyui')]
}
module.exports = config