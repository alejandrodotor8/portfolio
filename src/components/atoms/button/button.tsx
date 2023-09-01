import React from 'react';
import styles from './button.module.scss';

interface IProps {
	text?: string;
	svg?: React.ReactNode;
	isDark?: boolean;
	onClick?: () => void;
	to?: string;
	linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const Button = ({
	onClick,
	text = 'Click me!',
	svg,
	isDark,
	to,
	linkProps,
}: IProps) => {
	const content = (
		<>
			{svg && <div>{svg}</div>}
			<span>{text}</span>
		</>
	);
	return to ? (
		<a
			{...linkProps}
			href={to}
			className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
			{content}
		</a>
	) : (
		<button
			onClick={onClick}
			className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
			{content}
		</button>
	);
};
