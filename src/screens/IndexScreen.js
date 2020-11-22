import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPost } = useContext(BlogContext);

	useEffect(() => {
		getBlogPost();
		const listener = navigation.addListener('didFocus', () => {
			getBlogPost();
		});

		return () => {
			listener.remove();
		};
	}, []);

	return (
		<View>
			<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
				<Image style={{ top: 0 }} source={require('../../assets/CourseDashboard.png')} />
				<View style={styles.cont1}>
					<FlatList
						data={state}
						keyExtractor={(blogPost) => blogPost.title}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
									<View style={styles.row}>
										<Text style={styles.title}>{item.title}</Text>
										<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
											<Feather style={styles.icon} name="trash" size={24} color="black" />
										</TouchableOpacity>
									</View>
								</TouchableOpacity>
							);
						}}
					/>
				</View>
				<View style={styles.cont}>
					<FlatList
						data={state}
						keyExtractor={(blogPost) => blogPost.title}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity onPress={() => navigation.navigate('Stat', { id: item.id })}>
									<View style={styles.row}>
										<Text style={styles.title}>{item.title}</Text>
										<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
											<Feather style={styles.icon} name="trash" size={24} color="black" />
										</TouchableOpacity>
									</View>
								</TouchableOpacity>
							);
						}}
					/>
				</View>
			</ScrollView>
			<View style={styles.bg}>
				<Text style={styles.header}>{navigation.getParam('course')}</Text>
			</View>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('Create', { title: 'Create a new test' })}>
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
		width: 255,
		left: 0
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
		width: 370,
		left: 15
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	icon: {
		position: 'relative',
		fontSize: 24
	},
	header: {
		left: 0,
		justifyContent: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		margin: 20,
		color: 'white'
	},
	cont: {
		position: 'absolute',
		top: 690
	},
	cont1: {
		position: 'absolute',
		top: 555
	}
});

//in onpress we can do two things, one thing is done and other is just pass the reference to the function

export default IndexScreen;
