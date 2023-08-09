import React from 'react';
import styles from './button.module.scss';

interface IProps {
	text: string;
	onClick: () => void;
	svg: React.ReactNode;
}

export const Button = ({ onClick, text, svg }: IProps) => {
	return (
		<button onClick={onClick} className={styles.wrapper}>
			<div>{svg}</div>
			<span>{text}</span>
		</button>
	);
};
