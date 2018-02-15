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
    console.log(this.props.location);
    console.log(this.props.match.params.articleName);
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
      
      <div className="page-header">
        <div className="content-container">
          <br/>
          <p className="option__text">{article['title']}</p>
          <p className="option__text">{(article['text'])}</p>
          <br/>
        </div>
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
