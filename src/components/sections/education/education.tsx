import React from 'react';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './education.module.scss';
import Image from 'next/image';

interface IProps {
	data: ISection;
}

export const EducationSection = ({ data }: IProps) => {
	return (
		<section
			id="educacion"
			className={`${sectionStyles.section} ${sectionStyles.section__center}`}>
			<h2 className={sectionStyles.title_section}>
				{data.title}
				<span>.</span>
			</h2>
			<ul className={styles.container}>
				{data.contentsCollection.items.map((item, i) => (
					<li className={styles.wrapper} key={i}>
						<Image
							src={item.image.url}
							alt={item.subTitle + ' Logo'}
							width={175}
							height={162}
						/>
						<h4>{item.title}</h4>
						<span className={styles.name}>{item.subTitle}</span>
						<span className={styles.date}>{item.subDescription}</span>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
