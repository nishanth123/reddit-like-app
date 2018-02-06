import React from 'react';
import ReactDOM from 'react-dom';
import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';

export default class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    console.log('In ArticleComponent Mount now');
  }


  render() {
    
    return (
      <div>
        <br/><br/>
        <p className="option__text">{myArticles['art1']['title']}</p>
        <p className="option__text">{(myArticles['art1']['content'])}</p>
        <br/>
      </div>
    );
  }
}