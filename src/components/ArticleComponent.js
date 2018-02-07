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
    console.log('In ArticleComponent Mount now');
  }

  render() {
    
    return (
      
      <div className="page-header">
        <div className="content-container">
          <br/>
          <p className="option__text"><a href="article">{myArticles['art1']['title']}</a></p>
          <p className="option__text">{(myArticles['art1']['content'])}</p>
          <br/>
        </div>
      </div>
    );
  }
}