import React from 'react';
import CountUp from 'react-countup';
import Typed from 'react-typed';
import { useTheme } from '@/hooks/useTheme';
import { ISection } from '@/interfaces/contentful.interface';
import { Button } from '@/components/atoms/button/button';
import { CvIcon } from '@/assets/svg/icons/cv-icon';
import { color_gray_light, color_white } from '@/constants/colors';
import { PaperPlaneIcon } from '@/assets/svg/icons/paper-plane-icon';
import sectionStyles from '@/styles/index.module.scss';
import styles from './random-data.module.scss';

interface IProps {
	data: ISection;
	typedWords: string;
	subTitle: string;
	description: string;
}

export const SectionRandomData = ({
	data,
	description,
	typedWords,
	subTitle,
}: IProps) => {
	const { isDarkTheme } = useTheme();
	const newDescription = description.split(' ').map((word, i) => {
		if (word.includes('*'))
			return (
				<span key={i} className={styles.big_title__orange}>
					{word.replaceAll('*', '') + ' '}
				</span>
			);
		else return <span key={i}>{word} </span>;
	});

	return (
		<section
			id="start"
			className={[
				sectionStyles.section,
				sectionStyles.section__center,
				styles.section_principal,
			].c()}>
			<div className={styles.container_titles}>
				<h1 className={[styles.hi, isDarkTheme && styles.hi_dark].c()}>
					Hi!<span className={styles.hand}>👋</span>I am Alejandro Dotor
				</h1>
				<h2 className={styles.big_title}>
					{description}{' '}
					<Typed
						strings={typedWords.split('#')}
						typeSpeed={100}
						backSpeed={70}
						className={styles.big_title__orange}
						loop
					/>
				</h2>
				<h2 className={styles.location}>{subTitle}</h2>
			</div>
			<div className={styles.container_data}>
				{data.contentsCollection.items.map((item, key) => (
					<React.Fragment key={key}>
						<div className={styles.data_wrapper}>
							<CountUp
								className={[isDarkTheme && styles.rectangle_dark].c()}
								start={0}
								end={parseInt(item.subTitle)}
								delay={0.35}
							/>
							<span className={[isDarkTheme && styles.text_data_dark].c()}>
								{item.title}
							</span>
						</div>
						{key < data.contentsCollection.items.length - 1 && (
							<div className={styles.divider}></div>
						)}
					</React.Fragment>
				))}
			</div>
			<div className={styles.buttons}>
				<Button
					text={data.title}
					to="/alejandroCV.pdf"
					linkProps={{ target: '_blank', rel: 'rel="noopener noreferrer"' }}
					svg={<CvIcon color={isDarkTheme ? color_gray_light : undefined} />}
					isDark={isDarkTheme}
				/>
				<Button
					text={data.action}
					to="#contact"
					svg={<PaperPlaneIcon color={color_white} />}
					isColor
				/>
			</div>
		</section>
	);
};
