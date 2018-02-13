
// ADD_ARTICLE
let nextArticleId = 0
export const ADD_ARTICLE = text => {
	return {
		type: 'ADD_ARTICLE',
		id: nextArticleId++,
		text
	}
}

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleArticle = id => {
	return {
		type: 'TOGGLE_ARTICLE',
		id
	}
}

