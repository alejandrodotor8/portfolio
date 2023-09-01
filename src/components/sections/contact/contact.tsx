import React from 'react';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './contact.module.scss';
import Image from 'next/image';

interface IProps {
	data: ISection;
}

export const ContactSection = ({ data }: IProps) => {
	return (
		<section
			id="contacto"
			className={`${sectionStyles.section} ${sectionStyles.section__center} ${styles.section_contact}`}>
			<h2 className={sectionStyles.title_section}>
				{data.title}
				<span>.</span>
			</h2>
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
								<span className={styles.name}>{item.title}</span>
								<span className={styles.data}>{item.subTitle}</span>
							</div>
						</a>
					</li>
				))}
			</ul>
			<a className={styles.container_arrow} href="#inicio">
				<div></div>
			</a>
		</section>
	);
};
