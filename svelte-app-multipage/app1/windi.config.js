import {
	defineConfig
} from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
	darkMode: 'class', // or 'media'
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			colors: {
				blue: colors.sky,
				red: colors.rose,
				pink: colors.fuchsia,
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
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			},
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#4a4a4a',
						maxWidth: '100%',
						a: {
							color: '#3182ce',
							textDecoration: 'none',
							'&:hover': {
								color: '#2c5282'
							}
						},
						h1: {
							color: '#323232',
							marginTop: '0',
							marginBottom: '1rem'
						},
						h2: {
							color: '#4a4a4a',
							marginTop: '0',
							marginBottom: '0.75rem'
						},
						h3: {
							color: '#323232',
							marginTop: '0',
							marginBottom: '0.75rem'
						},
						h4: {
							color: '#4a4a4a',
							marginTop: '0',
							marginBottom: '0.5rem'
						},
						p: {
							marginTop: '0',
							marginBottom: '0.5rem'
						}
					}
				}
			}
		}
	},
	shortcuts: {
		'btn': 'active:shadow-lg duration-200 ease-linear focus:outline-none outline-none shadow transition-all mb-1 mr-1 px-6 py-3 rounded font-semibold text-base cursor-pointer',
		'btn-blue': 'active:bg-blue-600 bg-blue-500 text-gray-50 active:text-white',
		'btn-red': 'active:bg-red-600 bg-red-500 text-gray-50 active:text-white',
		'btn-gray': 'active:bg-gray-200 active:text-gray-800 bg-gray-100',
		'input': 'appearance-none w-full p-4 text-sm font-semibold leading-none rounded w-full border-gray-200 outline-none focus:ring-0',
	},

	plugins: [
		// plugin(({ addComponents }) => {
		// 	const buttons = {
		// 		'.btn': {
		// 			padding: '.75rem 1rem',
		// 			borderRadius: '.25rem',
		// 			fontWeight: '600'
		// 		},
		// 		'.btn': {
		// 			backgroundColor: '#262626',
		// 			color: '#fafafa',
		// 			'&:hover': {
		// 				backgroundColor: '#171717'
		// 			},
		// 			'&:active': {
		// 				backgroundColor: '#404040'
		// 			},
		// 			'&.active': {
		// 				backgroundColor: '#404040',
		// 				color: '#fcfcfc'
		// 			}
		// 		},
		// 		'.btn-blue': {
		// 			backgroundColor: '#3490dc',
		// 			color: '#fff',
		// 			'&:hover': {
		// 				backgroundColor: '#2779bd'
		// 			},
		// 			'&:active': {
		// 				backgroundColor: '#2779bd'
		// 			},
		// 			'&.active': {
		// 				backgroundColor: '#ddd',
		// 				color: '#4a4a4a'
		// 			}
		// 		},
		// 		'.btn-gray': {
		// 			backgroundColor: '#e2e8f0',
		// 			color: '#475569',
		// 			'&:hover': {
		// 				backgroundColor: '#cbd5e1'
		// 			},
		// 			'&:active': {
		// 				backgroundColor: '#94A3B8'
		// 			},
		// 			'&.active': {
		// 				backgroundColor: '#94A3B8',
		// 				color: '#fff'
		// 			}
		// 		},
		// 		'.btn-red': {
		// 			backgroundColor: '#e3342f',
		// 			color: '#fff',
		// 			'&:hover': {
		// 				backgroundColor: '#cc1f1a'
		// 			}
		// 		}
		// 	}
		// 	addComponents(buttons)
		// }),
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography')({
			className: 'nwp-prose',
			dartk: true,
			modifiers: ['DEFAULT', 'sm', 'lg', 'red']
		})
	]
})