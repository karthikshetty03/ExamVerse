import react from 'react';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const StatScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);
	const res = navigation.getParam('id');

	const blogPost = state.find((blogPost) => blogPost.id === res);

	return (
		<View>
			<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
				<Image source={require('../../assets/TestResult.png')} />
				<View style={styles.cont}>
					<TouchableOpacity onPress={() => navigation.navigate('Update', { id: res })} style={styles.tch} />
				</View>
				<View style={styles.cont1}>
					<TouchableOpacity onPress={() => console.log('H')} style={styles.tch1} />
				</View>
				<View style={styles.cont5}>
					<TouchableOpacity onPress={() => console.log('H')} style={styles.tch5} />
				</View>
				<View style={styles.cont6}>
					<TouchableOpacity onPress={() => console.log('H')} style={styles.tch6} />
				</View>
			</ScrollView>
			<View style={styles.bg}>
				<Text style={styles.header}>Quiz 1</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#237ACA',
		position: 'absolute',
		borderBottomEndRadius: 20,
		width: 150,
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
	cont: {
		position: 'absolute',
		bottom: 70,
		left: 15
	},
	tch: {
		height: 30,
		width: 180,
		borderRadius: 20,
		backgroundColor: 'rgba(0,100,255,0.3)'
	},
	cont1: {
		position: 'absolute',
		bottom: 70,
		left: 220
	},
	tch1: {
		height: 30,
		width: 180,
		backgroundColor: 'rgba(100,0,255,0.3)',
		borderRadius: 20
	},
	cont5: {
		position: 'absolute',
		bottom: 24,
		left: 220
	},
	tch5: {
		height: 30,
		width: 190,
		backgroundColor: 'rgba(100,0,255,0.3)',
		borderRadius: 20
	},
	cont6: {
		position: 'absolute',
		bottom: 25,
		left: 10
	},
	tch6: {
		height: 30,
		width: 190,
		backgroundColor: 'rgba(100,0,255,0.3)',
		borderRadius: 20
	}
});
export default StatScreen;
