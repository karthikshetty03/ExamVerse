import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';
import BonusScreen from './src/screens/BonusScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import FacultyCourseScreen from './src/screens/FacultyCourseScreen';
import IndexScreen from './src/screens/IndexScreen';
import IndividualScreen from './src/screens/IndividualScreen';
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import ShowScreens from './src/screens/ShowScreens';
import StatScreen from './src/screens/StatsScreen';
import AccountSettingScreen from './src/screens/Student/AccountSettingScreen';
import QuestionScreen from './src/screens/Student/QuestionScreen';
import SettingScreen from './src/screens/Student/SettingScreen';
import StudentScreen from './src/screens/Student/StudentScreen';
import TestScreen from './src/screens/Student/TestScreen';
import WaitingScreen from './src/screens/Student/WaitingScreen';
import UpdateScreen from './src/screens/UpdateScreen';

const navigator = createStackNavigator(
	{
		Land: LandingScreen,
		Login: LoginScreen,
		Faculty: FacultyCourseScreen,
		Index: IndexScreen,
		Show: ShowScreens,
		Create: CreateScreen,
		Edit: EditScreen,
		Stat: StatScreen,
		Update: UpdateScreen,
		Individual: IndividualScreen,
		Bonus: BonusScreen,
		Student: StudentScreen,
		Setting: SettingScreen,
		Account: AccountSettingScreen,
		Waiting: WaitingScreen,
		Test: TestScreen,
		Question: QuestionScreen
	},
	{
		initialRouteName: 'Land',
		defaultNavigationOptions: {
			title: 'XamVerse'
		}
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
