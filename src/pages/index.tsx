import React from 'react';
import { GetStaticProps } from 'next';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { useTheme } from '@/hooks/useTheme';
import styles from '../styles/index.module.scss';

interface IProps {
	data: IPrincipal;
}

const Home = ({ data }: IProps) => {
	const randomDataSection = data.sectionsCollection.items[0];
	const { isDarkTheme, toggleTheme } = useTheme();
	return (
		<main>
			<section
				className={`${styles.section} ${styles.section_principal} ${styles.section__center}`}>
				<header className={styles.header}>
					<div className={styles.hamburger}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div>toggle theme</div>
				</header>
				<h3>{data.title}</h3>
				<h1>{data.description}</h1>
				<h6>{data.subTitle}</h6>
				<div>
					<div>
						<div>{randomDataSection.contentsCollection.items[0].subTitle}</div>
						<div>{randomDataSection.contentsCollection.items[0].title}</div>
					</div>
					<div></div>
					<div>
						<div>{randomDataSection.contentsCollection.items[1].subTitle}</div>
						<div>{randomDataSection.contentsCollection.items[1].title}</div>
					</div>
					<div></div>
					<div>
						<div>{randomDataSection.contentsCollection.items[2].subTitle}</div>
						<div>{randomDataSection.contentsCollection.items[2].title}</div>
					</div>
				</div>
				<div>
					<button>{randomDataSection.title}</button>
					<button>{randomDataSection.action}</button>
				</div>
			</section>
			<section
				className={`${styles.section} ${styles.section__center}`}></section>
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
