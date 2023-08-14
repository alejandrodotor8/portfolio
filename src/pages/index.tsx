import React from 'react';
import { GetStaticProps } from 'next';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { SectionRandomData } from '@/components/sections/random-data/random-data';
import { SectionAboutMe } from '@/components/sections/about-me/about-me';

interface IProps {
	data: IPrincipal;
}

const Home = ({ data }: IProps) => {
	const randomDataSection = data.sectionsCollection.items[0];
	const aboutMeSection = data.sectionsCollection.items[1];

	return (
		<main>
			<SectionRandomData
				data={randomDataSection}
				description={data.description}
				title={data.title}
				subTitle={data.subTitle}
			/>
			<SectionAboutMe data={aboutMeSection} />
		</main>
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
