import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';

var allArticles = [];

let i = 0;
var tabs = Object.keys(myCategories);

var articleCategoryMapping = new Map([]);

this.articleList = Object.values(myCategories);
console.log(myCategories);

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
      tabName: articleCategoryMapping[articleName],
      completed: false
    };

    allArticles.push(article);
  }
}

const initialState={
  tabIndex: 0,
  articles : allArticles,
  categories: tabs
}

// Articles Reducer
function Articles(state = initialState, action) {
    return state
}

export default Articles