const topPos = (element: HTMLElement): number => {
	if (element === null) return 0;
	return element.getBoundingClientRect().top;
};

const inViewport = (element: HTMLElement): boolean => {
	const rect = element.getBoundingClientRect();
	const bottom = window.innerHeight || element.clientHeight;
	return rect.top >= 0 && rect.bottom <= bottom;
};

const addClass = (element: HTMLElement, className: string): void => {
	if (inViewport(element)) {
		element.classList.add(className);
	}
};

export default topPos;
export {inViewport, addClass};
