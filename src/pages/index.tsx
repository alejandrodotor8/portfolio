import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { SectionRandomData } from '@/components/sections/random-data/random-data';
import { SectionAboutMe } from '@/components/sections/about-me/about-me';
import { Hamburger } from '@/components/atoms/hamburger/hamburger';
import { useTheme } from '@/hooks/useTheme';
import { ToggleButton } from '@/components/atoms/toggle-theme-button/toggle-theme-button';
import { SectionExperience } from '@/components/sections/experience/experience';
import { EducationSection } from '@/components/sections/education/education';
import { ProjectsSection } from '@/components/sections/projects/projects';
import { ContactSection } from '@/components/sections/contact/contact';
import { Footer } from '@/components/sections/footeer/footer';
import '@/utils/array-utils';
import styles from '../styles/index.module.scss';

interface IProps {
	data: IPrincipal;
}

const Home = ({ data }: IProps) => {
	const { isDarkTheme, toggleTheme } = useTheme();

	const randomDataSection = data.sectionsCollection.items[0];
	const aboutMeSection = data.sectionsCollection.items[1];
	const experienceSection = data.sectionsCollection.items[2];
	const educationSection = data.sectionsCollection.items[3];
	const projectsSection = data.sectionsCollection.items[4];
	const contactSection = data.sectionsCollection.items[5];
	const footerSection = data.sectionsCollection.items[6];

	return (
		<main>
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
					content="Portafolio web, frontend developer, react developer"
				/>
				<meta property="og:url" content="https://alejandrodotor.com" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/pp.jpg" />
				<meta property="og:site_name" content="Alejandro Dotor" />
				<meta property="og:locale" content="es_US" />
			</Head>
			<header className={`${styles.header} ${styles.center}`}>
				<Hamburger isDark={isDarkTheme} />
				<div>
					<ToggleButton onClick={toggleTheme} isDark={isDarkTheme} />
				</div>
			</header>
			<SectionRandomData
				data={randomDataSection}
				description={data.description}
				title={data.title}
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
