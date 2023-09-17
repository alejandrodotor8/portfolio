import { ISection } from '@/interfaces/contentful.interface';
import React from 'react';
import styles from './footer.module.scss';
import sectionStyles from '../../../styles/index.module.scss';
import Image from 'next/image';
import icon from '../../../../public/apple-touch-icon.png';

interface IProps {
	data: ISection;
}

export const Footer = ({ data }: IProps) => {
	return (
		<footer className={styles.footer + ' ' + sectionStyles.center}>
			<hr />
			<div className={styles.container}>
				<div className={styles.name}>
					<Image src={icon} alt="logo Alejandrodotor8" width={30} height={30} />
					<span>{data.title}</span>
				</div>
				<ul className={styles.menu}>
					<li>
						<a aria-label="Go to about me section" href="#start">
							About me
						</a>
					</li>
					<li>
						<a aria-label="Go to experience section" href="#experience">
							Experience
						</a>
					</li>
					<li>
						<a aria-label="Go to education section" href="#education">
							Education
						</a>
					</li>
					<li>
						<a aria-label="Go to projects section" href="#projects">
							Projects
						</a>
					</li>
					<li>
						<a
							aria-label="Go to me CV in pdf"
							href="/alejandroCV.pdf"
							target="_blank"
							rel="noopener noreferrer">
							Curriculum
						</a>
					</li>
				</ul>
			</div>
			<p></p>
			<p>
				This portfolio is open source. Feel free to use it, but don't forget to
				leave a ⭐ on the repo. You can find the repository{' '}
				<a
					aria-label="Go to this website repo"
					href="https://github.com/alejandrodotor8/portfolio">
					here
				</a>
				.
			</p>
		</footer>
	);
};
