import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';
import { ADD_ARTICLE } from '../actions/article.js';

var allArticles = [];

let i = 0;
var tabs = Object.keys(myCategories);

var articleCategoryMapping = new Map([]);

this.articleList = Object.values(myCategories);

var count = 0;
for (i = 0; i < 3; i++){

  for (var j in this.articleList[i]){
    count = count + 1;

    articleCategoryMapping[this.articleList[i][j]] = tabs[i];

    var articleName = this.articleList[i][j];

    var article = {
      id: count,
      title: myArticles[articleName]['title'],
      text: myArticles[articleName]['content'],
      tabName: articleCategoryMapping[articleName]
    };

    allArticles.push(article);
  }
}

const initialState={
  tabIndex: 0,
  articles : allArticles,
  categories: tabs,
  title: undefined,
  text: undefined
}

// Articles Reducer
function Articles(state = initialState, action) {

  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          tabIndex: action.tabIndex,
          completed: false
        }
      ]

    default:
      return state
  }
    
}

export default Articles