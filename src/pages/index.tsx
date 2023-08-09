import React from 'react';
import { GetStaticProps } from 'next';
import { ContentfulServices } from '@/services/contentful/contentful.services';
import { IPrincipal } from '@/interfaces/contentful.interface';
import { useTheme } from '@/hooks/useTheme';
import styles from '../styles/index.module.scss';
import { ToggleButton } from '@/components/atoms/toggle-theme-button/toggle-theme-button';
import { Button } from '@/components/atoms/button/button';
import { CvIcon } from '@/assets/svg/icons/cv-icon';
import { PaperPlaneIcon } from '@/assets/svg/icons/paper-plane-icon';

interface IProps {
	data: IPrincipal;
}

const Home = ({ data }: IProps) => {
	const randomDataSection = data.sectionsCollection.items[0];
	const { isDarkTheme, toggleTheme } = useTheme();

	const description = data.description.split(' ').map((word, i) => {
		if (word.includes('*'))
			return (
				<span key={i} className={styles.big_title__orange}>
					{word.replaceAll('*', '') + ' '}
				</span>
			);
		else return <span key={i}>{word} </span>;
	});

	return (
		<main>
			<section
				className={`${styles.section} ${styles.section__center} ${styles.section_principal}`}>
				<header className={styles.header}>
					<div className={styles.hamburger}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div>
						<ToggleButton onClick={toggleTheme} isDark={isDarkTheme} />
					</div>
				</header>
				<div className={styles.container_titles}>
					<h2 className={`${styles.hi} ${isDarkTheme && styles.hi_dark}`}>
						{data.title}
					</h2>
					<h1 className={styles.big_title}>{description}</h1>
					<h4 className={styles.location}>{data.subTitle}</h4>
				</div>
				<div className={styles.container_data}>
					<div className={styles.data_wrapper}>
						<div className={isDarkTheme ? styles.rectangle_dark : undefined}>
							{randomDataSection.contentsCollection.items[0].subTitle}
						</div>
						<div className={isDarkTheme ? styles.text_data_dark : undefined}>
							{randomDataSection.contentsCollection.items[0].title}
						</div>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.data_wrapper}>
						<div className={isDarkTheme ? styles.rectangle_dark : undefined}>
							{randomDataSection.contentsCollection.items[1].subTitle}
						</div>
						<div className={isDarkTheme ? styles.text_data_dark : undefined}>
							{randomDataSection.contentsCollection.items[1].title}
						</div>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.data_wrapper}>
						<div className={isDarkTheme ? styles.rectangle_dark : undefined}>
							{randomDataSection.contentsCollection.items[2].subTitle}
						</div>
						<div className={isDarkTheme ? styles.text_data_dark : undefined}>
							{randomDataSection.contentsCollection.items[2].title}
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<Button
						text={randomDataSection.title}
						onClick={() => {
							return;
						}}
						svg={<CvIcon />}
					/>
					<Button
						text={randomDataSection.action}
						onClick={() => {
							return;
						}}
						svg={<PaperPlaneIcon />}
					/>
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
