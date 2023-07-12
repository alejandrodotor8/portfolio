import React from 'react';
import { GetStaticProps } from 'next';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { useTheme } from '@/hooks/useTheme';

interface IProps {
	data: IPrincipal;
}

const Home = ({ data }: IProps) => {
	const { isDarkTheme, toggleTheme } = useTheme();
	return (
		<div>
			<h2>{data.title}</h2>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data, status } = await ContentfulServices.getPrincipal('home-page');
		return {
			props: {
				data: status === 200 ? data.data.principalCollection.items[0] : {},
			},
		};
	} catch (error) {
		console.log('getStaticProps Error: ', error);
		return {
			props: { data: {} },
		};
	}
};
