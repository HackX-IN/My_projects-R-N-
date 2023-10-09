import { APP_CONFIG } from "../constants";
import AuthWrapper from "../components/AuthWrapper";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function AuthScreen({ navigation }) {
    const handleLogin = () => {
    
        navigation.navigate(APP_CONFIG.SCREENS.LOGIN_SCREEN);
    }
    const handleSignup = () => {
        // alert('SIGNUP')
        navigation.navigate(APP_CONFIG.SCREENS.SIGNUP_SCREEN);
    }
    return <AuthWrapper showBtn={false} >
        <Button style={styles.btn} mode="contained" onPress={handleSignup}> Sign up</Button>
        <Button style={styles.btn} mode="contained" onPress={handleLogin}> Login</Button>
    </AuthWrapper>
}

const styles = StyleSheet.create({
    btn: {
        marginVertical:12
    }
})