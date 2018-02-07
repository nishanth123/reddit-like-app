import moment from 'moment';

// Get article

export default (article, { text, sortBy, startDate, endDate}) => {
	return article.filter((article) => {
		const createdAtMoment = moment(article.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		const textMatch = expense.description.toLowerCase(). includes(text.toLowerCase());
		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
	if (sortBy === 'date') {
		return a.createdAt < b.createdAt ? 1 : -1;
	} else if (sortBy === 'amount') {
		return a.amount < b.amount ? 1 : -1;
	}
    });
};

