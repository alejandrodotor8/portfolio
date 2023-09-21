import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { IPropsChildren } from '@/interfaces/globals.interface';
import { isMobile } from 'react-device-detect';

export const FadeWhenVisible = ({ children }: IPropsChildren) => {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: isMobile ? 0.5 : 0, scale: isMobile ? 0.8 : 0 },
			}}
			ref={ref}>
			{children}
		</motion.div>
	);
};
