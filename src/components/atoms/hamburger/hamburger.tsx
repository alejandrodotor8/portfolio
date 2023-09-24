import React, { useState } from 'react';
import styles from './hamburger.module.scss';

interface IProps {
	isDark: boolean;
}

export const Hamburger = ({ isDark }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				aria-label="Menu"
				onClick={() => setIsOpen(oldState => !oldState)}
				className={[
					styles.wrapper,
					isDark ? styles.dark : styles.light,
					isOpen && styles.open,
				].c()}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
			<ul
				className={`${styles.menu} ${
					isOpen ? styles.active : styles.inactive
				} ${isDark ? styles.menu_dark : styles.menu_light}`}>
				<li>
					<a href="#aboutme">
						<span>👋</span>Abut me
					</a>
				</li>
				<li>
					<a href="#experience">
						<span>🧳</span>Experience
					</a>
				</li>
				<li>
					<a href="#education">
						<span>🎓</span>Education
					</a>
				</li>
				<li>
					<a href="#projects">
						<span>🔨</span>Projects
					</a>
				</li>
				<li>
					<a href="#contact">
						<span>👨🏻‍💼</span>Contact
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
		</>
	);
};
