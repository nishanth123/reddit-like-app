// Articles Reducer
const articles = (state = [], action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_ARTICLE:
			return state.map((article, index) => {
				if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
			}
				
			return article
		})
		default:
			return state	
	}

};

export default articles
