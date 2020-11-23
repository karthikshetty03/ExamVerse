import react from 'react';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

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
			<View style={styles.mn}>
				<Text style={styles.txt}>Add a question</Text>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('Edit', { id: navigation.getParam('id'), title: 'Create a new question' })}
				>
					<View style={styles.icn}>
						<AntDesign name="pluscircle" size={30} color="black" />
					</View>
				</TouchableOpacity>
			</View>
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
	},
	txt: {
		position: 'absolute',
		right: 50,
		top: 15,
		fontWeight: 'bold',
		fontSize: 20
	},
	mn: {
		flexDirection: 'row',
		flex: 1
	},
	icn: {
		marginTop: 10,
		marginRight: 10
	}
});
export default ShowScreens;
