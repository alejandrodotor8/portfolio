import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { ISection } from '@/interfaces/contentful.interface';
import { LinkIcon } from '@/assets/svg/icons/link-icon';
import { GitHubIcon } from '@/assets/svg/icons/github-icon';
import sectionStyles from '@/styles/index.module.scss';
import styles from './projects.module.scss';
import { FadeWhenVisible } from '@/components/molecules/fade-when-visible/fade-when-visible';
import { color_dark, color_light } from '@/constants/colors';

interface IProps {
	data: ISection;
}

export const ProjectsSection = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();

	return (
		<FadeWhenVisible>
			<section
				id="projects"
				className={[sectionStyles.section, sectionStyles.section__center].c()}>
				<h3
					className={[
						sectionStyles.title_section,
						sectionStyles.title_section__right,
					].c()}>
					{data.title}
					<span>.</span>
				</h3>
				<ul className={styles.container}>
					{data.contentsCollection.items.map((item, i) => (
						<li
							className={styles.wrapper}
							style={{ backgroundColor: item.subAction }}
							key={i}>
							<div className={styles.left}>
								<span className={styles.title}>{item.title}</span>
								<p className={styles.text}>{item.subDescription}</p>
								<div className={styles.techContainer}>
									{item.subTitle.split(',').map((item, i) => (
										<span
											key={i}
											className={[
												styles.techItem,
												isDarkTheme
													? styles.techItem__dark
													: styles.techItem__light,
											].c()}>
											{item}
										</span>
									))}
								</div>

								<div
									className={[
										styles.links,
										isDarkTheme && styles.linksDark,
									].c()}>
									<a
										aria-label={'Go to repo of ' + item.title}
										href={item.actionLink}
										target="_blank"
										rel="noopener noreferrer">
										<GitHubIcon
											color={isDarkTheme ? color_light : color_dark}
										/>
									</a>
									<a
										aria-label={'Go to ' + item.title + ' web'}
										href={item.subActionLink}
										target="_blank"
										rel="noopener noreferrer">
										<LinkIcon color={isDarkTheme ? color_light : color_dark} />
									</a>
								</div>
							</div>
							<div className={styles.right}>
								<Image
									src={item.image.url}
									alt={item.subTitle + ' screenshot/preview'}
									width={614}
									height={780}
								/>
							</div>
						</li>
					))}
				</ul>
			</section>
		</FadeWhenVisible>
	);
};
