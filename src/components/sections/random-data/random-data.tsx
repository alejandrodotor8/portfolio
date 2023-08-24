import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ISection } from '@/interfaces/contentful.interface';
import { Button } from '@/components/atoms/button/button';
import { CvIcon } from '@/assets/svg/icons/cv-icon';
import { color_gray_light } from '@/constants/colors';
import { PaperPlaneIcon } from '@/assets/svg/icons/paper-plane-icon';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './random-data.module.scss';

interface IProps {
	data: ISection;
	title: string;
	subTitle: string;
	description: string;
}

export const SectionRandomData = ({
	data,
	description,
	subTitle,
	title,
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
			id="inicio"
			className={`${sectionStyles.section} ${sectionStyles.section__center} ${styles.section_principal}`}>
			<div className={styles.container_titles}>
				<h2 className={`${styles.hi} ${isDarkTheme && styles.hi_dark}`}>
					{title}
				</h2>
				<h1 className={styles.big_title}>{newDescription}</h1>
				<h4 className={styles.location}>{subTitle}</h4>
			</div>
			<div className={styles.container_data}>
				<div className={styles.data_wrapper}>
					<div className={isDarkTheme ? styles.rectangle_dark : undefined}>
						{data.contentsCollection.items[0].subTitle}
					</div>
					<div className={isDarkTheme ? styles.text_data_dark : undefined}>
						{data.contentsCollection.items[0].title}
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.data_wrapper}>
					<div className={isDarkTheme ? styles.rectangle_dark : undefined}>
						{data.contentsCollection.items[1].subTitle}
					</div>
					<div className={isDarkTheme ? styles.text_data_dark : undefined}>
						{data.contentsCollection.items[1].title}
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.data_wrapper}>
					<div className={isDarkTheme ? styles.rectangle_dark : undefined}>
						{data.contentsCollection.items[2].subTitle}
					</div>
					<div className={isDarkTheme ? styles.text_data_dark : undefined}>
						{data.contentsCollection.items[2].title}
					</div>
				</div>
			</div>
			<div className={styles.buttons}>
				<Button
					text={data.title}
					onClick={() => {
						return;
					}}
					svg={<CvIcon color={isDarkTheme ? color_gray_light : undefined} />}
					isDark={isDarkTheme}
				/>
				<Button
					text={data.action}
					onClick={() => {
						return;
					}}
					svg={
						<PaperPlaneIcon
							color={isDarkTheme ? color_gray_light : undefined}
						/>
					}
					isDark={isDarkTheme}
				/>
			</div>
		</section>
	);
};
