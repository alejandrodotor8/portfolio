import React from 'react';
import { SunIcon } from '@/assets/svg/icons/sun';
import styles from './toggle-theme-button.module.scss';
import { MoonIcon } from '@/assets/svg/icons/moon';

interface IProps {
	onClick: () => void;
	isDark: boolean;
}

export const ToggleButton = ({ onClick, isDark }: IProps) => {
	return (
		<button
			aria-label="Toggle theme"
			onClick={onClick}
			className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
			{isDark ? <MoonIcon /> : <SunIcon />}
		</button>
	);
};
