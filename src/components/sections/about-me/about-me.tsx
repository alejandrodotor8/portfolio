import React from 'react';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './about-me.module.scss';
import Image from 'next/image';

interface IProps {
	data: ISection;
}

export const SectionAboutMe = ({ data }: IProps) => {
	return (
		<section
			id="sobremi"
			className={`${sectionStyles.section} ${sectionStyles.section__center} ${styles.section_about}`}>
			<h2 className={sectionStyles.title_section}>
				{data.title}
				<span>.</span>
			</h2>
			<div className={styles.container}>
				<p>{data.description}</p>

				<Image
					src={data.image.url}
					alt="foto de perfil"
					width={400}
					height={400}
					className={styles.profile_picture}
					priority
				/>
			</div>
		</section>
	);
};
