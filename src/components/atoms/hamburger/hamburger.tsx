import React, { useState } from 'react';
import styles from './hamburger.module.scss';

interface IProps {
	isDark: boolean;
}

export const Hamburger = ({ isDark }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<button
			onClick={() => setIsOpen(oldState => !oldState)}
			className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<ul
				className={`${styles.menu} ${
					isOpen ? styles.active : styles.inactive
				} ${isDark ? styles.menu_dark : styles.menu_light}`}>
				<li>
					<a href="#sobremi">
						<span>👋</span>Sobre mi
					</a>
				</li>
				<li>
					<a href="#experiencia">
						<span>🧳</span>Experiencia
					</a>
				</li>
				<li>
					<a href="#educacion">
						<span>🎓</span>Educación
					</a>
				</li>
				<li>
					<a href="#proyectos">
						<span>🔨</span>Proyectos
					</a>
				</li>
				<li>
					<a href="#contacto">
						<span>👨🏻‍💼</span>Contacto
					</a>
				</li>
				<li className={styles.social}>
					<a
						href="https://www.linkedin.com/in/alejandrodotor8/"
						target="_blank"
						rel="noopener noreferrer">
						<span>🐬</span>LinkedIn
					</a>
				</li>
				<li>
					<a
						href="https://github.com/alejandrodotor8"
						target="_blank"
						rel="noopener noreferrer">
						<span>🐈‍⬛</span>GitHub
					</a>
				</li>
				<li>
					<a
						href="https://www.behance.net/alejandrodotor8"
						target="_blank"
						rel="noopener noreferrer">
						<span>🦄</span>Behance
					</a>
				</li>
			</ul>
		</button>
	);
};
