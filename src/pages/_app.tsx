import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/hooks/useTheme';
import '@/styles/globals.scss';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<div className={poppins.className}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
