import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const QuestionScreen = ({ navigation }) => {
	const [ res, setRes ] = useState(0);
	return (
		<View>
			<ScrollView>
				{res == 0 ? <Image source={require('../../../assets/Question.png')} /> : null}

				{res == 1 ? <Image source={require('../../../assets/FinalQ.png')} /> : null}

				{res == 2 ? <Image source={require('../../../assets/FinalSideQ.png')} /> : null}

				{res !== 2 ? (
					<FontAwesome5 style={styles.cont5} name="hourglass-start" size={45} color="black" />
				) : null}

				<TouchableOpacity
					style={styles.cont1}
					onPress={() => {
						setRes(1);
					}}
				/>
				<TouchableOpacity
					style={styles.cont2}
					onPress={() => {
						setRes(0);
					}}
				/>
				<TouchableOpacity
					style={styles.cont3}
					onPress={() => {
						setRes(2);
					}}
				/>
				<TouchableOpacity
					style={styles.cont4}
					onPress={() => {
						alert('Test Submitted Sucessfully !');
						navigation.navigate('Student');
					}}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: 50,
		height: 60,
		top: 80,
		right: 5
		//backgroundColor: 'white'
	},
	cont2: {
		position: 'absolute',
		width: 50,
		height: 50,
		top: 80,
		left: 5
		//backgroundColor: 'white'
	},
	cont3: {
		position: 'absolute',
		width: 70,
		height: 60,
		top: 0,
		left: 0
		//backgroundColor: 'rgba(0,0,0,0.5)'
	},
	cont4: {
		position: 'absolute',
		width: 150,
		height: 60,
		top: 380,
		left: 0
		//backgroundColor: 'black'
	},
	cont5: {
		position: 'absolute',
		width: 150,
		height: 60,
		top: 180,
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
	},

	icon: {
		position: 'relative',
		top: 10,
		left: 5
	}
});

export default QuestionScreen;
