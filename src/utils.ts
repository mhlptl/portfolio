const topPos = (element: HTMLElement): number => {
	if (element === null) return 0;
	return element.getBoundingClientRect().top;
};

const inViewport = (element: HTMLElement): boolean => {
	const rect = element.getBoundingClientRect();
	const bottom = window.innerHeight || element.clientHeight;
	return rect.top >= 0 && rect.bottom <= bottom;
};

const toggleClass = (element: HTMLElement, className: string): void => {
	if (inViewport(element)) {
		!element.classList.contains(className) && element.classList.add(className);
	} else {
		element.classList.remove(className);
	}
};

export default topPos;
export {inViewport, toggleClass};
