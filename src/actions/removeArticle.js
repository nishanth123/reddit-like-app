export const removeArticle = articleId => {

  return {
    type: 'REMOVE_ARTICLE',
    id: articleId, 
    payload: {}
    
  }
}