import React from 'react';
import styles from './button.module.scss';

interface IProps {
	text: string;
	onClick: () => void;
	svg: React.ReactNode;
	isDark?: boolean;
}

export const Button = ({ onClick, text, svg, isDark }: IProps) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
			<div>{svg}</div>
			<span>{text}</span>
		</button>
	);
};
