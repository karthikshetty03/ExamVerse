import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const TestScreen = ({ navigation }) => {
	return (
		<View>
			<Image source={require('../../../assets/Test.png')} />
			<TouchableOpacity
				style={styles.cont2}
				onPress={() => {
					alert('Test Submitted Successfilly !');
					navigation.navigate('Student');
				}}
			/>
			<FontAwesome5 style={styles.cont1} name="hourglass-start" size={45} color="black" />
			<TouchableOpacity
				style={styles.cont3}
				onPress={() => {
					navigation.navigate('Question');
				}}
			>
				<View style={styles.icon}>
					<FontAwesome name="pencil-square-o" size={40} color="white" />
				</View>
				<Text style={styles.cont4}>All Questions</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: '100%',
		height: 60,
		top: 125,
		left: 40
		//backgroundColor: 'black'
	},
	cont2: {
		position: 'absolute',
		width: 200,
		height: 50,
		bottom: 170,
		left: 100
		//backgroundColor: 'rgba(0,0,0,0.5)'
	},
	cont3: {
		position: 'absolute',
		width: 250,
		height: 60,
		top: 0,
		left: 5,
		//backgroundColor: 'rgba(0,0,0,0.1)',
		borderTopEndRadius: 20,
		borderBottomEndRadius: 20
	},
	cont4: {
		position: 'absolute',
		left: 50,
		top: 9,
		fontSize: 22,
		color: 'white',
		textAlign: 'center',
		justifyContent: 'center',
		marginTop: 10
	},

	container: {
		position: 'absolute',
		left: 300,
		height: 65,
		justifyContent: 'center'
		//backgroundColor: 'black',
		//color: 'white
	},

	icon: {
		position: 'relative',
		top: 10,
		left: 5
	}
});

export default TestScreen;
