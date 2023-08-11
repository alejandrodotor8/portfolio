import { color_gray } from '@/constants/colors';
import React from 'react';

export const MoonIcon = ({ color = color_gray }: { color?: string }) => {
	return (
		<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.031 1A8.139 8.139 0 1 0 17 10.969s-4.162 1.593-7.862-2.107C5.439 5.162 7.032 1 7.032 1h0Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
