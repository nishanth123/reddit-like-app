import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';

console.log('test4');

let i = 0;
let tabs = Object.keys(myCategories);
this.articleList = Object.values(myCategories);
this.articlesArray = Object.values(myArticles);

console.log(this.articleList);
//console.log(this.articleArray);

const initialState={
	articles : [
  {
    id: 1,
    title: 'Novena',
    text: 'This is sample text in art1',
    tabName: 'hot',
		completed: false
  },
  {
    id: 2,
    title: 'Rosary',
    text: 'This is sample text in art2',
    tabName: 'latest',
		completed: false
  }
]
}

// Articles Reducer
function Articles(state = initialState, action) {

	console.log('test5');
	
	switch (action.type) {

    case 'ADD_ARTICLE':
      return Object.assign({}, state, {
        articles: [
          ...state.articles,
          {
            text: action.text,
            id: action.id,
            title: action.title,
            tabName: action.tabName,
            completed: true
          }
        ]
      })
    default:
      return state
  }
}

export default Articles
