import React from 'react';
import { color_gray_dark } from '@/constants/colors';

export const PaperPlaneIcon = ({
	color = color_gray_dark,
}: {
	color?: string;
}) => {
	return (
		<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.67 5.853 3.472.251A2.4 2.4 0 0 0 .207 3.372l1.92 4.298a.849.849 0 0 1 0 .656l-1.92 4.297A2.402 2.402 0 0 0 2.4 16a2.51 2.51 0 0 0 1.08-.256l11.2-5.602a2.4 2.4 0 0 0 0-4.289h-.008ZM13.96 8.71l-11.2 5.601a.8.8 0 0 1-1.08-1.04l1.912-4.297c.025-.057.046-.116.064-.176h5.512a.8.8 0 0 0 0-1.6H3.655a1.6 1.6 0 0 0-.064-.177L1.68 2.724a.8.8 0 0 1 1.08-1.04l11.2 5.601a.8.8 0 0 1 0 1.425Z"
				fill={color}
			/>
		</svg>
	);
};
