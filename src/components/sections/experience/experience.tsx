import React, { useState } from 'react';
import Image from 'next/image';
import { IContent, ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import { Button } from '@/components/atoms/button/button';
import { useTheme } from '@/hooks/useTheme';
import styles from './experience.module.scss';
import { RichText } from '@/components/atoms/rich-text/rich-text';

interface IProps {
	data: ISection;
}

export const SectionExperience = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();

	return (
		<section
			id="experiencia"
			className={`${sectionStyles.section} ${sectionStyles.section__center} ${styles.section}`}>
			<h2
				className={`${sectionStyles.title_section} ${sectionStyles.title_section__right}`}>
				{data.title}
				<span>.</span>
			</h2>
			<ul className={styles.container}>
				{data.contentsCollection.items.map((experience, i) => (
					<Experience
						key={i}
						index={i}
						experience={experience}
						textHide={data.actionLink}
						textShow={data.action}
						isDarkTheme={isDarkTheme}
					/>
				))}
			</ul>
		</section>
	);
};

interface IPropsExperience {
	index: number;
	experience: IContent;
	textShow: string;
	textHide: string;
	isDarkTheme: boolean;
}

const Experience = ({
	experience,
	index,
	textHide,
	textShow,
	isDarkTheme,
}: IPropsExperience) => {
	const [showMore, setShowMore] = useState(false);

	return (
		<li
			className={`${styles.wrapper} ${
				(index + 1) % 2 === 0 ? styles.right : styles.left
			}`}>
			<Image
				src={experience.image.url}
				alt="logo experience"
				width={100}
				height={100}
			/>
			<h4>{experience.title}</h4>
			<span className={isDarkTheme ? styles.spanDark : styles.span}>
				{experience.subTitle}
			</span>
			<span
				className={`${isDarkTheme ? styles.spanDark : styles.span} ${
					styles.italic
				}`}>
				{experience.action}
			</span>
			<p className={`${showMore ? styles.show : styles.hide}`}>
				{experience.subDescription}
			</p>
			<div className={styles.line}></div>
			<div className={styles.circle}></div>
			<div className={styles.containerBtn}>
				<Button
					text={showMore ? textHide : textShow}
					onClick={() => setShowMore(sm => !sm)}
					isDark={isDarkTheme}
				/>
			</div>
		</li>
	);
};
