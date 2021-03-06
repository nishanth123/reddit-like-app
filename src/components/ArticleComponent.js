import React from 'react';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';

export default class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);      
  }

  onSubmit(article){
    this.props.startEditArticle(this.props.article.id, article);
    this.props.history.push('/');
  };

  componentDidMount() {
    
  }

  render() {
    
    const articleId = this.props.match.params.articleName;
    const myArticles = this.props.articles;
    
    let articles = Object.values(myArticles)[1];    

    var article = articles[1];

    for (var i in articles){

      var id = articles[i]['id'];
      
      if (id == articleId){
        article = articles[i];
        break;
      } 
    }

    return (
      

      <div className="out__article__block">
        <div className="article__block">
          <br/>
          <p className="option__text__article">{article['title']}</p>
          <br />
          <p className="option__text">{(article['text'])}</p>
          <br/>
        </div>
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    categories: state.categories,
  }
}

export const ArticleComponentContainer = connect(
  mapStateToProps,
  null
)(ArticleComponent);