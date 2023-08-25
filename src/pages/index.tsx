import React, { useEffect, useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { SectionRandomData } from '@/components/sections/random-data/random-data';
import { SectionAboutMe } from '@/components/sections/about-me/about-me';
import styles from '../styles/index.module.scss';
import { Hamburger } from '@/components/atoms/hamburger/hamburger';
import { useTheme } from '@/hooks/useTheme';
import { ToggleButton } from '@/components/atoms/toggle-theme-button/toggle-theme-button';
import { SectionExperience } from '@/components/sections/experience/experience';
import { EducationSection } from '@/components/sections/education/education';
import { ProjectsSection } from '@/components/sections/projects/projects';
import { ContactSection } from '@/components/sections/contact/contact';
import Image from 'next/image';
import icon from '../assets/images/icon.png';
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
			<footer className={styles.footer + ' ' + styles.center}>
				<hr />
				<div className={styles.name}>
					<Image src={icon} alt="logo Alejandro Dotor" width={30} height={30} />
					<span>{footerSection.title}</span>
				</div>
				<ul className={styles.menu}>
					<li>
						<a href="#inicio">Inicio</a>
					</li>
					<li>
						<a href="#sobremi">Sobre mi</a>
					</li>
					<li>
						<a href="#experiencia">Experiencia</a>
					</li>
					<li>
						<a href="#educacion">Educación</a>
					</li>
					<li>
						<a href="#proyectos">Proyectos</a>
					</li>
					<li>
						<a
							href="/alejandroCV.pdf"
							target="_blank"
							rel="noopener noreferrer">
							Curriculum
						</a>
					</li>
				</ul>
				<p>
					{footerSection.description}{' '}
					<a
						href={footerSection.actionLink}
						target="_blank"
						rel="noopener noreferrer">
						{footerSection.action}
					</a>
				</p>
			</footer>
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
