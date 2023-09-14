import bootstrap from './bootstrap_logo.png';
import gatsby from './gatsby_logo.png';
import java from './java_logo.png';
import next from './next_logo.png';
import react from './react_logo.png';
import react_native from './react_native_logo.png';
import redux from './redux_logo.png';
import sass from './sass_logo.png';
import sql from './sql_logo.png';
import ts from './ts_logo.png';
import vue from './vue_logo.png';

const experienceImages = (icon: string) => {
	return {
		bootstrap: { image: bootstrap, name: 'Bootstrap' },
		gatsby: { image: gatsby, name: 'Gatsby' },
		java: { image: java, name: 'Java' },
		next: { image: next, name: 'Next.js' },
		react: { image: react, name: 'React' },
		react_native: { image: react_native, name: 'React Native' },
		redux: { image: redux, name: 'Redux Toolkit' },
		sass: { image: sass, name: 'Sass' },
		sql: { image: sql, name: 'SQL' },
		ts: { image: ts, name: 'TypeScript' },
		vue: { image: vue, name: 'Vue.js' },
	}[icon];
};

export default experienceImages;
