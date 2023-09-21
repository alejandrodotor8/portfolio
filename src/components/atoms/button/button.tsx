import React from 'react';
import styles from './button.module.scss';

interface IProps {
	text?: string;
	svg?: React.ReactNode;
	isDark?: boolean;
	isColor?: boolean;
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
	isColor,
}: IProps) => {
	const content = (
		<>
			{svg && <div>{svg}</div>}
			<span>{text}</span>
		</>
	);

	const className = [
		styles.wrapper,
		isColor ? styles.color : isDark ? styles.dark : styles.light,
	].c();

	return to ? (
		<a {...linkProps} href={to} className={className}>
			{content}
		</a>
	) : (
		<button onClick={onClick} className={className}>
			{content}
		</button>
	);
};
