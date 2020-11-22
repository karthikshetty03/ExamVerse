import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const FacultyCourseScreen = ({ navigation }) => {
	const [ selectedValue, setSelectedValue ] = useState('');

	return (
		<View>
			<Image source={require('../../assets/MainDashboard.png')} />
			<TouchableOpacity
				style={styles.cont1}
				onPress={() => navigation.navigate('Index', { course: 'Optimization' })}
			/>
			<TouchableOpacity
				style={styles.cont2}
				onPress={() => navigation.navigate('Index', { course: 'Electrical Devices' })}
			/>
			<TouchableOpacity
				style={styles.cont3}
				onPress={() => navigation.navigate('Index', { course: 'Phonetics' })}
			/>
			<View style={styles.container}>
				<Picker
					prompt=""
					mode="dropdown"
					selectedValue={selectedValue}
					style={{ height: 65, width: 250 }}
					onValueChange={(itemValue, itemIndex) => {
						setSelectedValue(itemValue);
						console.log(itemValue);
						if (itemValue == 'Logout') navigation.navigate('Land');
					}}
				>
					<Picker.Item label="" value="" />
					<Picker.Item label="Profile" value="Profile" />
					<Picker.Item label="Settings" value="Settings" />
					<Picker.Item label="Logout" value="Logout" />
				</Picker>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cont1: {
		position: 'absolute',
		width: 375,
		height: 60,
		top: 125,
		left: 20
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

export default FacultyCourseScreen;
