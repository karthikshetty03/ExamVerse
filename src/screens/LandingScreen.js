import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const LandingScreen = ({ navigation }) => {
	return (
		<View style={styles.cont}>
			<TouchableOpacity onPress={() => navigation.navigate('Login', { title: 'Student' })}>
				<View style={styles.icn1}>
					<MaterialCommunityIcons name="human-greeting" size={60} color="black" />
				</View>
				<View style={styles.cont1}>
					<Text style={styles.txt}>Student Login</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Login', { title: 'Faculty' })}>
				<View style={styles.icn1}>
					<FontAwesome5 name="chalkboard-teacher" size={60} color="black" />
				</View>
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
		justifyContent: 'space-between',
		backgroundColor: 'aqua'
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
	},
	icn1: {
		position: 'relative',
		left: 65,
		marginBottom: 10
	}
});

export default LandingScreen;
