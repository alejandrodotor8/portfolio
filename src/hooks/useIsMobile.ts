import { useState, useEffect } from 'react';

export default function useIsMobile(maxWidth = 1024) {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	useEffect(() => {
		if (window) {
			if (isMobile === null) setIsMobile(window.innerWidth < maxWidth);
			const handleResize = () => setIsMobile(window.innerWidth < maxWidth);
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, [maxWidth, isMobile]);

	return isMobile;
}
