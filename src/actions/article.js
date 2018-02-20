export const addArticle = article => {
  
  return {
    type: 'ADD_ARTICLE',
    id: article.id,
    article
    
  }
}