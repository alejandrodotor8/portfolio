import React from 'react';
import { GetStaticProps } from 'next';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { SectionRandomData } from '@/components/sections/random-data/random-data';
import { SectionAboutMe } from '@/components/sections/about-me/about-me';
import { SectionExperience } from '@/components/sections/experience/experience';
import { EducationSection } from '@/components/sections/education/education';
import { ProjectsSection } from '@/components/sections/projects/projects';
import { ContactSection } from '@/components/sections/contact/contact';
import { Footer } from '@/components/sections/footeer/footer';
import { Header } from '@/components/molecules/header/header';
import { Seo } from '@/components/atoms/seo/seo';
import '@/utils/array-utils';

interface IProps {
	data: IPrincipal;
}

const Home = ({ data }: IProps) => {
	const randomDataSection = data.sectionsCollection.items[0];
	const aboutMeSection = data.sectionsCollection.items[1];
	const experienceSection = data.sectionsCollection.items[2];
	const educationSection = data.sectionsCollection.items[3];
	const projectsSection = data.sectionsCollection.items[4];
	const contactSection = data.sectionsCollection.items[5];
	const footerSection = data.sectionsCollection.items[6];

	return (
		<main>
			<Seo />
			<Header />
			<SectionRandomData
				data={randomDataSection}
				description={data.description}
				typedWords={data.action}
				subTitle={data.subTitle}
			/>
			<SectionAboutMe data={aboutMeSection} />
			<SectionExperience data={experienceSection} />
			<EducationSection data={educationSection} />
			<ProjectsSection data={projectsSection} />
			<ContactSection data={contactSection} />
			<Footer data={footerSection} />
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
