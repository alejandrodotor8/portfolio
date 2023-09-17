import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { ISection } from '@/interfaces/contentful.interface';
import { LinkIcon } from '@/assets/svg/icons/link-icon';
import { GitHubIcon } from '@/assets/svg/icons/github-icon';
import sectionStyles from '../../../styles/index.module.scss';
import styles from './projects.module.scss';

interface IProps {
	data: ISection;
}

export const ProjectsSection = ({ data }: IProps) => {
	const { isDarkTheme } = useTheme();

	return (
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
					<li className={styles.wrapper} key={i}>
						<Image
							src={item.image.url}
							alt={item.subTitle + ' Logo'}
							width={786}
							height={527}
						/>
						<div className={styles.info}>
							<span className={styles.title}>{item.title}</span>
							<span
								className={[
									styles.subtext,
									isDarkTheme ? styles.text_light : styles.text_dark,
								].c()}>
								{item.subTitle}
							</span>
							<div
								className={[styles.links, isDarkTheme && styles.linksDark].c()}>
								<a
									aria-label={'Go to repo of ' + item.title}
									href={item.actionLink}
									target="_blank"
									rel="noopener noreferrer">
									<GitHubIcon />
								</a>
								<a
									aria-label={'Go to ' + item.title + ' web'}
									href={item.subActionLink}
									target="_blank"
									rel="noopener noreferrer">
									<LinkIcon />
								</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
