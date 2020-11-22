import react from 'react';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { ScrollView } from 'react-native';

const BonusScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);
	const res = navigation.getParam('id');

	const blogPost = state.find((blogPost) => blogPost.id === res);
	return (
		<View>
			<ScrollView>
				<Image style={{ top: 0 }} source={require('../../assets/Bonus.png')} />
				<Text style={styles.header}>{blogPost.title}</Text>
				<View style={styles.cont}>
					<TouchableOpacity
						onPress={() => {
							alert('Updated Successfully !');
							navigation.navigate('Stat', { id: res });
						}}
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
		bottom: 90,
		left: 48
	},
	tch: {
		height: 60,
		width: 310
		//backgroundColor: 'rgba(0,0,0,0.5)'
	}
});
export default BonusScreen;
