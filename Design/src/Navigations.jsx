import { Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';
import OtpScreen from './screens/OtpScreen';
import AuthScreen from './screens/AuthScreen';
import MenuScreen from './screens/MenuScreen';
import SignUpScreen from './screens/SignUp';
import DashboardScreen from './screens/DashboardScreen';
import TripsScreen from './screens/TripsScreen';
import TripDetailsScreen from './screens/TripDetail';
import PickUpScreen from './screens/PickUpScreen';
import DropOffScreen from './screens/DropOffScreen';
import { APP_CONFIG } from './constants';
import BackButton from './components/BackButton';

import { useMemo } from 'react';
const Stack = createStackNavigator();
export default function Navigations() {
    const HIDE_BACK_SREENS = [APP_CONFIG.SCREENS.AUTH_SCREEN, APP_CONFIG.SCREENS.MENU_SCREEN]
    return <>
        <Stack.Navigator
            initialRouteName={APP_CONFIG.SCREENS.TRIPS_SCREEN}
            
            screenOptions={{
                header: ({ navigation, route, options, back }) => {
                    const isBack = useMemo(() => {
                        return back &&  !HIDE_BACK_SREENS.includes(route.name)
                    },[back])
                    return isBack && <BackButton onPress={navigation.goBack} /> 
                },
               
                cardStyle: {
                    backgroundColor: APP_CONFIG.APP_THEME.colors.background
                }
            }}
        >
            <Stack.Screen name={APP_CONFIG.SCREENS.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.OTP_SCREEN} component={OtpScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.MENU_SCREEN} component={MenuScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.SIGNUP_SCREEN} component={SignUpScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.DASHBOARD_SCREEN} component={DashboardScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.TRIPS_SCREEN} options={{
               headerRight:()=><Text style={{color:'white'}}>Right</Text>
            }} component={TripsScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.TRIPS_DETAIL_SCREEN} options={{
                headerRight: () => <Text style={{ color: 'white' }}>Right</Text>
            }} component={TripDetailsScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.PICK_UP_SCREEN} options={{
                headerRight: () => <Text style={{ color: 'white' }}>Right</Text>
            }} component={PickUpScreen} />
            <Stack.Screen name={APP_CONFIG.SCREENS.DROP_OFF_SCREEN} options={{
                headerRight: () => <Text style={{ color: 'white' }}>Right</Text>
            }} component={DropOffScreen} />
        </Stack.Navigator>
    </>
}