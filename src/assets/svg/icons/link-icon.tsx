import { color_gray } from '@/constants/colors';
import React from 'react';

export const LinkIcon = ({ color = color_gray }: { color?: string }) => {
	return (
		<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.669 12.76a.96.96 0 0 1 0 1.36l-.475.474a4.8 4.8 0 1 1-6.788-6.788l1.929-1.928a4.798 4.798 0 0 1 6.584-.198.962.962 0 1 1-1.28 1.44 2.879 2.879 0 0 0-3.948.117L2.764 9.162a2.88 2.88 0 1 0 4.072 4.073l.475-.475a.96.96 0 0 1 1.358 0Zm5.924-11.356a4.806 4.806 0 0 0-6.788 0l-.475.475a.961.961 0 1 0 1.36 1.36l.475-.476a2.88 2.88 0 0 1 4.072 4.072l-1.928 1.93a2.879 2.879 0 0 1-3.95.114.963.963 0 1 0-1.279 1.439 4.799 4.799 0 0 0 6.582-.194l1.929-1.928a4.806 4.806 0 0 0 .002-6.79v-.002Z"
				fill={color}
			/>
		</svg>
	);
};