import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addArticle = (article) => ({
	type: 'ADD_ARTICLE',
	article
});

export const startAddArticle = (articleData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = articleData;
		const article = { description, note, amount, createdAt };

		return database.ref('article/${uid}').push(article).then((ref) => {
			dispatch(addArticle({
				id: ref.key,
				// ...article
			}));
		});
		};
};

// REMOVE_ARTICLE
export const removeArticle = ({ id } = {}) => ({
		type: 'REMOVE_ARTICLE',
		id
});

export const startRemoveArticle = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref('users/${uid}/articles/${id}').remove().then(() => {
			dispatch(removeArticle({ id }));
		});
	};
};

// EDIT_ARTICLE
export const editArticle = (id, updates) => ({
	type: 'EDIT_ARTICLE',
	id,
	updates
});

export const startEditArticle = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref('users/${uid}/articles/${id}').update(updates).then(() => {
			dispatch(editExpense(id, updates));
		});
	};
};

// SET_ARTICLE
export const setArticle = (articles) => ({
	type: 'SET_ARTICLES',
	articles
});

export const startSetArticles = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref('users/${uid}/articles').once('value').then((snapshot) => {
			const articles = [];

			snapshot.forEach((childSnapshot) => {
				articles.push({
					id: childSnapshot.key,
					...childSnapshot.val
				});
			});

			dispatch(setArticles(articles));
		});
	};
};





 
