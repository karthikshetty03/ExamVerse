import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const SettingScreen = ({ navigation }) => {
	return (
		<View>
			<Image source={require('../../../assets/Setting.png')} />
			<TouchableOpacity style={styles.cont1} onPress={() => navigation.navigate('Account')} />
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: '100%',
		height: 60,
		top: 90,
		//backgroundColor: 'black'
	},
	cont2: {
		position: 'absolute',
		width: 375,
		height: 60,
		top: 200,
		left: 20
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

export default SettingScreen;
