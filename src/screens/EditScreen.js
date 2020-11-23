import react from 'react';
import React, { useContext } from 'react';
import { TextInput, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../Components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
	const res = navigation.getParam('id');
	const { state, editBlogPost } = useContext(BlogContext);
	const blogPost = state.find((blogPost) => blogPost.id === res);

	return (
		<View>
			<Text style={styles.txt}>{navigation.getParam('title')}</Text>
			<BlogPostForm
				res={0}
				initialValues={{ title: '', content: blogPost.content }}
				onSubmit={(title, content) => {
					editBlogPost(res, title, content, () => {
						navigation.pop();
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	txt: {
		fontSize: 25,
		textAlign: 'center',
		textAlignVertical: 'center',
		backgroundColor: '#00CED1',
		height: 100,
		fontWeight: 'bold',
		justifyContent: 'center'
	}
});
export default EditScreen;
