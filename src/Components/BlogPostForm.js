import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ res, onSubmit, initialValues }) => {
	const [ title, setTitle ] = useState(initialValues.title);
	const [ content, setContent ] = useState(initialValues.content);

	return (
		<View style={styles.bg}>
			{res == 0 ? <Text style={styles.label}>Enter Question : </Text> : null}
			{res == 1 ? <Text style={styles.label}>Enter Title : </Text> : null}
			<TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
			{res === 0 ? <Text style={styles.label}>Enter S/M/SA/LA</Text> : null}
			{res === 0 ? (
				<TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
			) : null}
			{res == 0 ? <Text style={styles.label1}>S : Single Correct</Text> : null}
			{res == 0 ? <Text style={styles.label1}>M : Multiple Correct</Text> : null}
			{res == 0 ? <Text style={styles.label1}>SA : Short Answer</Text> : null}
			{res == 0 ? <Text style={styles.label1}>LA : Long Answer</Text> : null}
			{res === 0 ? <Text style={styles.label}>Enter Options if S/M (comma separated) : </Text> : null}
			{res === 0 ? <TextInput style={styles.input} /> : null}
			{res === 0 ? <Text style={styles.label}>Expected Answer : </Text> : null}
			{res === 0 ? <TextInput style={styles.input} /> : null}

			{res === 1 ? <Text style={styles.label}>Date of test (dd/mm/yyy) : </Text> : null}
			{res === 1 ? <TextInput style={styles.input} /> : null}
			{res === 1 ? <Text style={styles.label}>Time at which test starts (24-hour format) : </Text> : null}
			{res === 1 ? <TextInput style={styles.input} /> : null}
			{res === 1 ? <Text style={styles.label}>Test duration (in mins) : </Text> : null}
			{res === 1 ? <TextInput style={styles.input} /> : null}
			<Button title="Save" onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5
	},

	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5
	},
	label1: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
		justifyContent: 'center',
		textAlign: 'center',
		paddingBottom: 10,
		fontWeight: 'bold'
	},
	bg: {
		marginTop: 20
	}
});

export default BlogPostForm;
