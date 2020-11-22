import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker, Text } from 'react-native';

let para =
	'                          Test Instructions    ' +
	"\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)";

const WaitingScreen = ({ navigation }) => {
	return (
		<View>
			<Image source={require('../../../assets/Waiting.png')} />
			<TouchableOpacity
				style={styles.cont1}
				onPress={() => {
					alert(para);
				}}
			/>
			<Text style={styles.cont3}>Math F112</Text>
			<TouchableOpacity style={styles.cont2} onPress={() => navigation.navigate('Test')} />
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: 350,
		height: 45,
		top: 505,
		left: 30,
		backgroundColor: 'rgba(0,0,0,0.1)'
	},
	cont2: {
		position: 'absolute',
		width: 205,
		height: 50,
		top: 670,
		left: 100
		//backgroundColor: 'rgba(0,0,0,0.5)'
	},
	cont3: {
		position: 'absolute',
		width: 375,
		height: 60,
		top: 107,
		left: 180,
		fontSize: 25,
		fontWeight: 'bold'
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

export default WaitingScreen;
