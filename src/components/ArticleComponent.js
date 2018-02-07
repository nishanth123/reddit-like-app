import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';

export default class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log('test-2');
    this.onSubmit = this.onSubmit.bind(this);      
  }

  onSubmit(article){
    this.props.startEditArticle(this.props.article.id, article);
    this.props.history.push('/');
  };

  componentDidMount() {
    console.log(this.props.location);
    console.log(this.props.match.params.articleName);
    console.log('In ArticleComponent Mount now');
  }

  render() {
    
    const articleName = this.props.match.params.articleName;
    return (
      
      <div className="page-header">
        <div className="content-container">
          <br/>
          <p className="option__text">{myArticles[articleName]['title']}</p>
          <p className="option__text">{(myArticles[articleName]['content'])}</p>
          <br/>
        </div>
      </div>
    );
  }
}