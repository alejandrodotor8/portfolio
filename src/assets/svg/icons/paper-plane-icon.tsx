import React from 'react';
import { color_gray } from '@/constants/colors';

export const PaperPlaneIcon = ({ color = color_gray }: { color?: string }) => {
	return (
		<svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M19.756 8.19 5.056.836A3.149 3.149 0 0 0 .774 4.933l2.52 5.64a1.114 1.114 0 0 1 0 .862l-2.52 5.64a3.152 3.152 0 0 0 2.877 4.432c.492-.005.976-.12 1.417-.336l14.7-7.352a3.15 3.15 0 0 0 0-5.63h-.01Zm-.934 3.749-14.7 7.352a1.05 1.05 0 0 1-1.417-1.365l2.51-5.64c.032-.076.06-.153.083-.231h7.235a1.05 1.05 0 0 0 0-2.101H5.298a2.101 2.101 0 0 0-.084-.231l-2.509-5.64a1.05 1.05 0 0 1 1.417-1.366l14.7 7.352a1.049 1.049 0 0 1 0 1.87Z"
				fill={color}
			/>
		</svg>
	);
};
