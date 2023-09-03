import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './education.module.scss';

interface IProps {
	data: ISection;
}

export const EducationSection = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();
	return (
		<section
			id="educacion"
			className={[sectionStyles.section, sectionStyles.section__center].c()}>
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
						<span className={isDarkTheme ? styles.spanDark : styles.span}>
							{item.subTitle}
						</span>
						<span
							className={[
								isDarkTheme ? styles.spanDark : styles.span,
								styles.italic,
							].c()}>
							{item.subDescription}
						</span>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
