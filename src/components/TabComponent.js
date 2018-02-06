import React from 'react';
import ReactDOM from 'react-dom';
import myArticles from './../../data/articles.json';
import myCategories from './../../data/categories.json';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ArticleComponent from '../components/ArticleComponent';

export default class TabComponent extends React.Component {
  constructor(props) {
    super(props);

    this.articleList = [];
    this.articleTitles = [];
    this.articleDescriptions = [];
    this.articlesArray = [];

    this.state = 
    { 
      tabIndex: 0,
      options: [] 
    };
  }

  componentDidMount() {
    console.log('In TabComponent Mount now');

    let tabs = Object.keys(myCategories);
    this.articleList = Object.values(myCategories);
    this.articlesArray = Object.values(myArticles);

    this.setState({
        options: tabs
    });
  }

  getTabElements(){
    return this.state.options.map(category => {
      return (
        <Tab><p className="option__text"><a>{category}</a></p></Tab>              
      )});
  }

  getArticlePage(tabIndex) {

    return this.articleList.map(tabArticles => {
        return (
          <TabPanel>
            {tabArticles.map(
              articleName => (
                <div>
                    <p className="option__text"><a href="/article">{myArticles[articleName]['title']}</a></p>
                    <p className="option__text">{(myArticles[articleName]['content']).substring(0, 20) + "..."}</p>
                    <br/>
                </div>
              )
            )}
          </TabPanel>
    )});
  
  }

  render() {
    
    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          {this.getTabElements()}       

        </TabList>
        
          {this.getArticlePage(this.state.tabIndex)}

      </Tabs>
    );
  }
}