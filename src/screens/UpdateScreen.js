import react from 'react';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { ScrollView } from 'react-native';

const UpdateScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);
	const res = navigation.getParam('id');

	const blogPost = state.find((blogPost) => blogPost.id === res);
	return (
		<View>
			<ScrollView>
				<Image style={{ top: 0 }} source={require('../../assets/UpdateMarks.png')} />
				<Text style={styles.header}>{blogPost.title}</Text>
				<View style={styles.cont}>
					<TouchableOpacity onPress={() => navigation.navigate('Bonus', { id: res })} style={styles.tch} />
				</View>
				<View style={styles.cont1}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Individual', { id: res })}
						style={styles.tch}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		left: 0,
		justifyContent: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		margin: 20,
		color: 'white'
	},
	cont: {
		position: 'absolute',
		top: 100,
		left: 15
	},
	cont1: {
		position: 'absolute',
		top: 190,
		left: 15
	},
	tch: {
		height: 55,
		width: 385
		//backgroundColor: 'rgba(0,100,255,0.3)'
	}
});
export default UpdateScreen;
