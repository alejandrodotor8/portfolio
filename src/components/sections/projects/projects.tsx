import React from 'react';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './projects.module.scss';
import Image from 'next/image';

interface IProps {
	data: ISection;
}

export const ProjectsSection = ({ data }: IProps) => {
	return (
		<section
			id="proyectos"
			className={`${sectionStyles.section} ${sectionStyles.section__center}`}>
			<h2
				className={`${sectionStyles.title_section} ${sectionStyles.title_section__right}`}>
				{data.title}
				<span>.</span>
			</h2>
			<div className={styles.container}>
				{data.contentsCollection.items.map((item, i) => (
					<div className={styles.wrapper} key={i}>
						<Image
							src={item.image.url}
							alt={item.subTitle + ' Logo'}
							width={786}
							height={527}
						/>
						<h4>{item.title}</h4>
						<span className={styles.name}>{item.subTitle}</span>
						<span className={styles.date}>{item.subDescription}</span>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
