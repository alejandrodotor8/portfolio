import React from 'react';
import Image from 'next/image';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './experience.module.scss';

interface IProps {
	data: ISection;
}

export const SectionExperience = ({ data }: IProps) => {
	return (
		<section
			id="sobremi"
			className={`${sectionStyles.section} ${sectionStyles.section__center} ${styles.section}`}>
			<h2
				className={`${sectionStyles.title_section} ${sectionStyles.title_section__right}`}>
				{data.title}
				<span>.</span>
			</h2>
			<div className={styles.container}>
				{data.contentsCollection.items.map(experience => (
					<div>
						<Image
							src={experience.image.url}
							alt="logo experience"
							width={100}
							height={100}
						/>
						<h4>{experience.title}</h4>
						<span>{experience.subTitle}</span>
						<span>{experience.subDescription}</span>
						<p>{experience.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
