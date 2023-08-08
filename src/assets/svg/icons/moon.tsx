import { color_gray } from '@/constants/colors';
import React from 'react';

export const MoonIcon = ({ color = color_gray }: { color?: string }) => {
	return (
		<svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.539 1A10.174 10.174 0 1 0 21 13.461s-5.203 1.991-9.828-2.634C6.549 6.203 8.54 1 8.54 1h-.001Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
