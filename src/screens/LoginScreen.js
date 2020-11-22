import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	TextInput,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Button
} from 'react-native';

const LoginScreen = ({ navigation }) => {
	const res = navigation.getParam('title');
	return (
		<View>
			<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
				<KeyboardAvoidingView enabled>
					<Image style={styles.logo} source={require('../../assets/Login.png')} />
					<Text style={styles.title}>{res} Login</Text>
					<TextInput style={styles.user} placeholder="Username" />
					<TextInput secureTextEntry={true} style={styles.pass} placeholder="Password" />
					<View style={styles.box}>
						<Text style={styles.rights}>© 2020 XamVerse</Text>
					</View>
					<View style={styles.login}>
						<TouchableOpacity
							style={styles.btn}
							title="Login"
							onPress={() => {
								if (res === 'Student') {
									navigation.navigate('Student');
								} else {
									navigation.navigate('Faculty');
								}
							}}
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	logo: {
		height: 895
	},
	user: {
		position: 'absolute',
		top: 450,
		left: 60,
		width: 300,
		height: 30,
		fontSize: 25
	},
	pass: {
		position: 'absolute',
		top: 540,
		left: 60,
		width: 300,
		height: 30,
		fontSize: 25
	},
	box: {
		height: 50,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		backgroundColor: 'black',
		position: 'absolute',
		bottom: 5,
		width: '100%'
	},
	rights: {
		color: 'white',
		fontSize: 25,
		alignSelf: 'center'
	},
	login: {
		bottom: 200,
		width: 200,
		left: 60,
		position: 'absolute'
	},
	btn: {
		height: 60,
		width: 305
		//backgroundColor: 'black'
	},
	title: {
		position: 'absolute',
		bottom: 490,
		left: 135,
		fontSize: 25,
		fontWeight: 'bold'
	}
});

export default LoginScreen;
