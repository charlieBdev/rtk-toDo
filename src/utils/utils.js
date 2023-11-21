export const prepAuthor = (author) => {
	const preppedAuthor = author.split(',')[0];
	if (preppedAuthor === 'type.fit') {
		return 'unknown';
	} else {
		return preppedAuthor;
	}
};
