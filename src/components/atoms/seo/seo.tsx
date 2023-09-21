import React from 'react';
import Head from 'next/head';

export const Seo = () => {
	return (
		<Head>
			<title>Alejandrodotor8 | 👨🏻‍💻 Frontend developer</title>
			<meta
				name="description"
				content="Portafolio web, frontend developer, react developer, about me, experience and projects"
			/>
			<meta
				property="og:title"
				content="Alejandrodotor8 | 👨🏻‍💻 Frontend developer"
			/>
			<meta
				property="og:description"
				content="Portafolio web, frontend developer, react developer, about me, experience and projects"
			/>
			<meta property="og:url" content="https://alejandrodotor.com" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/pp.jpg" />
			<meta property="og:site_name" content="Alejandro Dotor" />
			<meta property="og:locale" content="es_CO" />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
};
