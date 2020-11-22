import react from 'react';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

import { ScrollView } from 'react-native';

const ShowScreens = ({ navigation }) => {
	const { state } = useContext(BlogContext);
	const res = navigation.getParam('id');

	const blogPost = state.find((blogPost) => blogPost.id === res);

	return (
		<View>
			<ScrollView>
				<Image source={require('../../assets/TestPattern.png')} />
				<View style={styles.bg}>
					<Text style={styles.header}>{blogPost.title}</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						alert('Test Saved Sucessfully !');
						navigation.pop();
					}}
					style={styles.cont1}
				/>
			</ScrollView>
		</View>
	);
};

ShowScreens.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Create', { id: navigation.getParam('id'), title: 'Create a new question' })}
			>
				<Feather name="plus" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#237ACA',
		position: 'absolute',
		borderBottomEndRadius: 20,
		width: 100,
		left: 0,
		color: 'white'
	},
	header: {
		left: 0,
		justifyContent: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		margin: 20,
		color: 'white'
	},
	content: {
		position: 'absolute',
		top: 100,
		left: 10,
		fontSize: 35
	},
	cont1: {
		position: 'absolute',
		width: 300,
		height: 60,
		bottom: 60,
		left: 55
		//backgroundColor: 'black'
	}
});
export default ShowScreens;
