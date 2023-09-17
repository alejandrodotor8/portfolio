import React from 'react';
import Image from 'next/image';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import { useTheme } from '@/hooks/useTheme';
import styles from './contact.module.scss';

interface IProps {
	data: ISection;
}

export const ContactSection = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();
	return (
		<section
			id="contact"
			className={[
				sectionStyles.section,
				sectionStyles.section__center,
				styles.section_contact,
			].c()}>
			<h3 className={sectionStyles.title_section}>
				{data.title}
				<span>.</span>
			</h3>
			<ul className={styles.container}>
				{data.contentsCollection.items.map((item, i) => (
					<li key={i}>
						<a
							className={styles.wrapper}
							href={item.actionLink}
							target="_blank"
							rel="noopener noreferrer">
							<Image
								src={item.image.url}
								alt={item.subTitle + ' Logo'}
								width={80}
								height={80}
							/>
							<div className={styles.containerText}>
								<span
									className={[
										styles.name,
										isDarkTheme && styles.text_light,
									].c()}>
									{item.title}
								</span>
								<span className={styles.data}>{item.subTitle}</span>
							</div>
						</a>
					</li>
				))}
			</ul>
			<a
				className={[
					styles.container_arrow,
					isDarkTheme ? styles.darkArrow : styles.lightArrow,
				].c()}
				aria-label="Go up"
				href="#start">
				<div></div>
			</a>
		</section>
	);
};
