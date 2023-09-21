import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { ISection } from '@/interfaces/contentful.interface';
import sectionStyles from '@/styles/index.module.scss';
import { RichText } from '@/components/atoms/rich-text/rich-text';
import styles from './education.module.scss';
import { FadeWhenVisible } from '@/components/molecules/fade-when-visible/fade-when-visible';

interface IProps {
	data: ISection;
}

export const EducationSection = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();
	return (
		<FadeWhenVisible>
			<section
				id="education"
				className={[sectionStyles.section, sectionStyles.section__center].c()}>
				<h3 className={sectionStyles.title_section}>
					{data.title}
					<span>.</span>
				</h3>
				<ul className={styles.container}>
					{data.contentsCollection.items.map((item, i) => (
						<li className={styles.wrapper} key={i}>
							<Image
								src={item.image.url}
								alt={item.subTitle + ' Logo'}
								width={175}
								height={162}
							/>
							<span className={styles.title}>{item.title}</span>
							<span
								className={[
									styles.subtitle,
									isDarkTheme ? styles.spanDark : styles.span,
								].c()}>
								{item.subTitle}
							</span>
							<span
								className={[
									isDarkTheme ? styles.spanDark : styles.span,
									styles.italic,
								].c()}>
								{item.subDescription}
							</span>
							<RichText text={item.description.json} />
						</li>
					))}
				</ul>
			</section>
		</FadeWhenVisible>
	);
};
