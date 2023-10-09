import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput, Button, withTheme, } from 'react-native-paper';
import { APP_CONFIG } from "../constants"
import PhoneInput from '../components/PhoneInput';
import TruckButton from '../components/TruckButton';
import BrandName from '../components/BrandName';
import OTPInput from '../components/OTPInput';
import { useOTP } from '../hooks/useOTP';
const OTPScreen = ({ theme, route, navigation }) => {
    const { emailorphone = null } = route.params;
  
 
    const { handleResendOtp,
        handleVerifyOTP,
        optValue,
        setOtpValue,
        isLoading,
        isBtnDisabled
    } = useOTP(navigation)
    // const isBtnDisabled = useMemo(()=>!optValue,[optValue])
    const handleOTP = (code) => {
        setOtpValue(code)
    }
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.content}>
                <BrandName />
                <OTPInput length={4} phoneNumber={emailorphone} onComplete={handleOTP} />
                <TouchableOpacity onPress={()=>handleResendOtp(emailorphone)}>
                    <Text style={styles.helperText}>
                        Send another code
                    </Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.footer}>
                <TruckButton onPress={() => {
                    handleVerifyOTP({
                        userName: emailorphone,
                        otp:optValue
                    })
                }} disbaled={isBtnDisabled} isLoading={false} btnText='NEXT' />
            </View>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    helperText: {
        color: APP_CONFIG.APP_THEME.colors.secondary,
        alignSelf:'center',
        marginVertical: 12,
        fontSize: 12
    },
    boldText: {
        color: APP_CONFIG.APP_THEME.colors.secondary,
    },

    loginBtn: {

    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    truckImage: {
        width: 200,
        height: 200,
    },
    phoneNumberInput: {
        marginBottom: 20,
    },
    loginButton: {
        marginBottom: 20,
    },
});

export default withTheme(OTPScreen);
