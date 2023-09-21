import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Hamburger } from '@/components/atoms/hamburger/hamburger';
import { ToggleButton } from '@/components/atoms/toggle-theme-button/toggle-theme-button';
import sectionStyles from '@/styles/index.module.scss';
import styles from './header.module.scss';

export const Header = () => {
	const { isDarkTheme, toggleTheme } = useTheme();
	return (
		<header className={[styles.header, sectionStyles.center].c()}>
			<Hamburger isDark={isDarkTheme} />
			<div>
				<ToggleButton onClick={toggleTheme} isDark={isDarkTheme} />
			</div>
		</header>
	);
};
