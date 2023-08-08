import React from 'react';
import styles from './button.module.scss';

interface IProps {
	text: string;
	onClick: () => void;
}

export const Button = ({ onClick, text }: IProps) => {
	return (
		<button onClick={onClick} className={styles.wrapper}>
			{text}
		</button>
	);
};
