import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const AccountSettingScreen = ({ navigation }) => {
	return (
		<View>
			<Image source={require('../../../assets/AccountSettings.png')} />
			<TouchableOpacity style={styles.cont1} onPress={() => navigation.navigate('Student')} />
			<TouchableOpacity style={styles.cont2} onPress={() => navigation.navigate('Land')} />
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: 150,
		height: 65,
		right: 0
		//backgroundColor: 'black'
	},
	cont2: {
		position: 'absolute',
		width: '100%',
		height: 60,
		top: 150,
		left: 0,
		//backgroundColor: 'rgba(0,0,0,0.5)'
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

export default AccountSettingScreen;
