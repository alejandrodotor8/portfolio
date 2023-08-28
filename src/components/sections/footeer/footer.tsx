import { ISection } from '@/interfaces/contentful.interface';
import React from 'react';
import styles from './footer.module.scss';
import sectionStyles from '../../../styles/index.module.scss';
import Image from 'next/image';
import icon from '../../../assets/images/icon.png';

interface IProps {
	data: ISection;
}

export const Footer = ({ data }: IProps) => {
	return (
		<footer className={styles.footer + ' ' + sectionStyles.center}>
			<hr />
			<div className={styles.container}>
				<div className={styles.name}>
					<Image src={icon} alt="logo Alejandro Dotor" width={30} height={30} />
					<span>{data.title}</span>
				</div>
				<ul className={styles.menu}>
					<li>
						<a href="#inicio">Inicio</a>
					</li>
					<li>
						<a href="#experiencia">Experiencia</a>
					</li>
					<li>
						<a href="#educacion">Educación</a>
					</li>
					<li>
						<a href="#proyectos">Proyectos</a>
					</li>
					<li>
						<a
							href="/alejandroCV.pdf"
							target="_blank"
							rel="noopener noreferrer">
							Curriculum
						</a>
					</li>
				</ul>
			</div>

			<p>
				{data.description}{' '}
				<a href={data.actionLink} target="_blank" rel="noopener noreferrer">
					{data.action}
				</a>
			</p>
		</footer>
	);
};
