import React, { useState } from 'react';
import Image from 'next/image';
import { IContent, ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import { Button } from '@/components/atoms/button/button';
import { useTheme } from '@/hooks/useTheme';
import styles from './experience.module.scss';
import { RichText } from '@/components/atoms/rich-text/rich-text';
import experienceIcons from '@/assets/images/icons/experience-icons';
interface IProps {
	data: ISection;
}

export const SectionExperience = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();

	return (
		<section
			id="experience"
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
				alt={'Company logo - ' + experience.subTitle}
				width={100}
				height={100}
				className={styles.company_img}
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
			<div
				className={[
					styles.richtext_container,
					showMore ? styles.show : styles.hide,
				].c()}>
				<RichText text={experience.description.json} />
				<div className={styles.tech}>
					<h5>Technologies:</h5>
					<ul>
						{experience.extra.tech.map((item: any, index: number) => (
							<li key={index}>
								<ExperienceIcon icon={item} />
							</li>
						))}
					</ul>
				</div>
				<div
					className={[
						styles.gradient,
						showMore && styles.gradient__hide,
					].c()}></div>
			</div>
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

interface IIconProps {
	icon: string;
}

const ExperienceIcon = ({ icon }: IIconProps) => {
	const iconData = experienceIcons(icon);
	return (
		<>
			<div className={styles.experience_icon}>
				<Image
					src={iconData!.image}
					alt={iconData!.name + ' logo'}
					width={30}
					height={30}
				/>
			</div>
			<span>{iconData!.name}</span>
		</>
	);
};
