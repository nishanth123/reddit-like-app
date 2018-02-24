import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';
import { addArticle } from '../actions/article.js';
import TYPES from '../types/article.js';

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

  var newArticleId = 0;
  var tabMap = ['hot', 'new', 'latest'];

  for (i = 0; i < allArticles.length; i++){
    var id = allArticles[i]['id'];

    if (newArticleId < id){
      newArticleId = id;
    }
  }

  newArticleId++;

  switch (action.type) {
    case TYPES.ADD_ARTICLE:

      var newArticle = {
        id: newArticleId,
        title: action.article.title,
        text: action.article.text,
        tabName: tabMap[action.article.tabIndex]
      };

      var articleForArticlesJSON = {
        title: action.article.title,
        content: action.article.text      
      };

      var artId = "art" + newArticleId;
      myArticles[artId] = articleForArticlesJSON;

      for(i = 0; i < 3; i++){
        if (tabs[i] === tabMap[action.article.tabIndex]){
          myCategories[tabs[i]].push(artId); 

          break;
        }
      }

      return {
        ...state,
        article: state.articles.push(newArticle)
      }

    case TYPES.REMOVE_ARTICLE:
    
      var removeArticleId = action.id;
      
      var count = state.articles.length; 
      var i = 0;
      var newArray = [];

      for (i = 0; i < count; i++){
        var article = state.articles[i];
        
        if (article.id === action.id){
          
        } else {
          newArray.push(article);
        }
      }

      state.articles = newArray;
      allArticles = newArray;

      return {

          ...state,
          article: state.articles
        }  
      
    default:
      return state
  }
}

export default Articles