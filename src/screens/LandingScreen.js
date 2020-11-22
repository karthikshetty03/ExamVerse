import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {
	return (
		<View style={styles.cont}>
			<TouchableOpacity onPress={() => navigation.navigate('Login', { title: 'Student' })}>
				<View style={styles.cont1}>
					<Text style={styles.txt}>Student Login</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Login', { title: 'Faculty' })}>
				<View style={styles.cont2}>
					<Text style={styles.txt}>Faculty Login</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	cont: {
		margin: 5,
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	cont1: {
		flexDirection: 'row',
		height: 200,
		width: 200,
		justifyContent: 'center',
		backgroundColor: 'blue'
	},
	cont2: {
		flexDirection: 'row',
		height: 200,
		width: 200,
		justifyContent: 'center',
		backgroundColor: 'black'
	},
	txt: {
		color: 'white',
		alignSelf: 'center',
		fontSize: 25
	}
});

export default LandingScreen;
