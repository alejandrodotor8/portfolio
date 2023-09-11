import React from 'react';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './about-me.module.scss';
import Image from 'next/image';
import { RichText } from '@/components/atoms/rich-text/rich-text';

interface IProps {
	data: ISection;
}

export const SectionAboutMe = ({ data }: IProps) => {
	return (
		<section
			id="aboutme"
			className={`${sectionStyles.section} ${sectionStyles.section__center}`}>
			<h2 className={sectionStyles.title_section}>
				{data.title}
				<span>.</span>
			</h2>
			<div className={styles.container}>
				<RichText text={data.description.json} />

				<Image
					src={data.image.url}
					alt="profile picture - me"
					width={400}
					height={400}
					className={styles.profile_picture}
					priority
				/>
			</div>
		</section>
	);
};
