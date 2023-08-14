import React from 'react';
import styles from './hamburger.module.scss';

interface IProps {
	isDark: boolean;
}

export const Hamburger = ({ isDark }: IProps) => {
	return (
		<button
			className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<ul className={styles.menu}>
				<li>
					<a href="#sobremi">
						<span>👋</span>Sobre mi
					</a>
				</li>
				<li>
					<a>
						<span>🧳</span>Experiencia
					</a>
				</li>
				<li>
					<a>
						<span>🔨</span>Proyectos
					</a>
				</li>
				<li>
					<a>
						<span>🎓</span>Educación
					</a>
				</li>
				<li className={styles.social}>
					<a
						href="https://www.linkedin.com/in/alejandrodotor8/"
						target="_blank">
						<span>🐬</span>LinkedIn
					</a>
				</li>
				<li className={styles.social}>
					<a href="https://github.com/alejandrodotor8" target="_blank">
						<span>🐈‍⬛</span>GitHub
					</a>
				</li>
				<li className={styles.social}>
					<a href="https://www.behance.net/alejandrodotor8" target="_blank">
						<span>🦄</span>Behance
					</a>
				</li>
			</ul>
		</button>
	);
};
