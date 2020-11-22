import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const StudentScreen = ({ navigation }) => {
	return (
		<View>
			<Image source={require('../../../assets/StudentDashboard.png')} />
			<TouchableOpacity style={styles.cont1} onPress={() => navigation.navigate('Setting')} />
			<TouchableOpacity style={styles.cont2} onPress={() => navigation.navigate('Waiting')} />
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: 115,
		height: 60,
		top: 2,
		right: 0
		//backgroundColor: 'black'
	},
	cont2: {
		position: 'absolute',
		width: 155,
		height: 60,
		top: 130,
		left: 240,
		//backgroundColor: 'black'
	},
	cont3: {
		position: 'absolute',
		width: 375,
		height: 60,
		top: 275,
		left: 20
		//backgroundColor: 'black'
	},

	container: {
		position: 'absolute',
		left: 300,
		height: 65,
		justifyContent: 'center'
		//backgroundColor: 'black',
		//color: 'white
	}
});

export default StudentScreen;
