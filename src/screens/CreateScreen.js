import react from 'react';
import React, { useContext } from 'react';
import { TextInput, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';
import { getFontScale } from 'react-native/Libraries/Utilities/PixelRatio';

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(BlogContext);
	return (
		<View>
			<Text style={styles.txt}>{navigation.getParam('title')}</Text>
			<BlogPostForm
				onSubmit={(title, content) => {
					addBlogPost(title, content, () => {
						navigation.navigate('Index');
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
		backgroundColor: 'rgba(0,0,0,0.2)',
		height: 50,
		marginBottom: 20,
		fontWeight: 'bold',
		justifyContent: 'center'
		
	}
});

export default CreateScreen;
