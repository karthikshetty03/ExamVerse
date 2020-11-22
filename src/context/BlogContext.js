import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const BlogReducer = (state, action) => {
	switch (action.type) {
		case 'get_BlogPost':
			return action.payload;
		//case 'add_BlogPost':
		//	return [
		//		...state,
		//		{
		//			id: Math.floor(Math.random() * 9999),
		//			title: action.payload.title,
		//			content: action.payload.content
		//		}
		//	];
		case 'edit_BlogPost':
			return state.map((blogPost) => (blogPost.id === action.payload.id ? action.payload : blogPost));
		case 'delete_BlogPost':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		default:
			return state;
	}
};

const getBlogPost = (dispatch) => {
	return async () => {
		const response = await jsonServer.get('/blogposts');
		dispatch({ type: 'get_BlogPost', payload: response.data });
	};
};

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonServer.post('/blogposts', { title, content });
		dispatch({ type: 'add_BlogPost', payload: { title, content } });
		if (callback) callback();
	};
};

const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		await jsonServer.put(`/blogposts/${id}`, { title, content });
		dispatch({ type: 'edit_BlogPost', payload: { id, title, content } });
		if (callback) callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogposts/${id}`);
		dispatch({ type: 'delete_BlogPost', payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	BlogReducer,
	{ getBlogPost, addBlogPost, editBlogPost, deleteBlogPost },
	[]
);

//const BlogContext = React.createContext();

//const BlogReducer = (state, action) => {
//	switch (action.type) {
//		case 'addBlogPost':
//			return [ ...state, { title: `Blog Post #${state.length + 1}` } ];
//		default:
//			return state;
//	}
//};

//export const BlogProvider = ({ children }) => {
//	const [ blogPosts, dispatch ] = useReducer(BlogReducer, []);

//	const addBlogPost = () => {
//		dispatch({ type: 'addBlogPost' });
//	};

//	return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
//};

//export default BlogContext;
