declare global {
	interface Array<T> {
		c(): string;
	}
}

Array.prototype.c = function <T>() {
	return this.filter(e => typeof e === 'string').join(' ');
};

export default Array.prototype.c;
