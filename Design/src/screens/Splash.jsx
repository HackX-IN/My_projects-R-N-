import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { APP_CONFIG } from "../constants"

import { authSuccess } from '../redux/slice/auth-slice';
import { useSelector } from 'react-redux';

const SplashScreen = () => {
    const navigation = useNavigation();
    const { isAuthenticated ,user,token}= useSelector(state=>state?.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate(APP_CONFIG.SCREENS.MENU_SCREEN)
        } else {
            navigation.navigate(APP_CONFIG.SCREENS.LOGIN_SCREEN)
        }
    }, [isAuthenticated]);

    return (
        <View style={styles.container}>
            {/* <View style={styles.gradient} /> */}
            <Text style={styles.logoText}>LOGIZIP</Text>
            <Text style={styles.subText}>DRIVER</Text>
            <Image source={APP_CONFIG?.IMAGES?.TRUCK_BANNER} style={styles.truckImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        width: '100%',

        zIndex: -1,
        backgroundColor: 'black',
        backgroundImage: `repeating-linear-gradient(135deg, rgb(0, 0, 0), rgb(0, 0, 0) 600px, rgb(240, 193, 60) 300px, rgb(240, 193, 60) 800px)`,
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginTop: '50%',
    },
    subText: {
        fontSize: 18,
        color: APP_CONFIG.APP_THEME.colors.secondary,
        alignSelf: 'center',
    },
    truckImage: {
        width: 350,
        height: 350,
        alignSelf: 'center',
        justifyContent: "flex-end",
        marginTop: '12%',
    },
});

export default SplashScreen;
