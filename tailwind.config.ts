import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		theme: {
			extend: {
				fontFamily: {
					sans: [
						'Mulish',
						'Segoe UI',
						'Roboto',
						'Helvetica Neue',
						'Arial',
						'sans-serif',
						'Segoe UI Symbol',
					],
				},
				colors: {
					textColors: '#374151'
				},
			},
			fontWeight: {
				light: '300',
				regular: '400',
				medium: '500',
				bold: '700',
			},
			fontSize: {
				xs: '9px',
				sm: '12px',
				md: '15px',
				xl: '18px',
				xxl: '22px'
			},
			spacing: {
				0: '0rem', // 0px
				0.5: '0.25rem', // 4px
				1: '0.5rem', // 8px
				2: '1rem', // 16px
				3: '1.5rem', // 24px
				4: '2rem', // 32px
				5: '2.5rem', // 40px
				6: '3rem', // 48px
				7: '3.5rem', // 56px
				8: '4rem', // 64px
				9: '4.5rem', // 72px
				10: '5rem', // 80px
				11: '5.5rem', // 88px
				12: '6rem', // 96px
			},
			screens: {
				xs: '400px',
				sm: '640px',
				md: '900px',
				lg: '1024px',
				xl: '1536px',
			},
		},
	},
	plugins: [],
} satisfies Config;
