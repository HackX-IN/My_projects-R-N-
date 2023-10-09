import React, { useMemo, useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import { APP_CONFIG } from "../constants"
import AuthWrapper from '../components/AuthWrapper';
import InputField from '../components/InputField'
import { Formik } from 'formik';
import { useFormValidation } from '../hooks/useFormValidations';
import { loginValidation } from '../utils/schema/validationSchema';
import { useLoginMutation } from '../redux/rtk-query/auth';
import axios from 'axios';
import { useLogin } from '../hooks/useLogin';
const LoginScreen = ({ theme, navigation }) => {

    const {
        isLoading,
        handleSubmit,
        isBtnDisabled,
        values,
        errors,
        handleBlur,
        handleChange,
        handleOtpLogin
    } = useLogin(navigation)


    return (
        <AuthWrapper isBtnDisabled={isBtnDisabled}  isLoading={isLoading} handlePress={handleSubmit} btnText='Send OTP' title={'Login'}>
            <InputField
                placeholder="EMAIL / PHONE NUMBER"
                autoCapitalize="none"
                centerAligned
                onChangeText={(text) => handleChange('email', text)}
                onBlur={() => handleBlur('email')}
                value={values?.userName}
                error={errors?.userName}

            />
            {/* <Pressable onPress={() => handleOtpLogin()}>
                <Text style={styles.otpLogin} > Login with one time passoword</Text>
            </Pressable> */}
            {/* <InputField
                placeholder="PASSWORD"
                autoCapitalize="none"
                centerAligned
                onChangeText={(text) => handleChange('password', text)}
                onBlur={() => handleBlur('password')}
                value={values?.password}
                error={errors?.password}
            /> */}

            {/* <Footer/> */}
            
        </AuthWrapper>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    otpLogin: {
        textDecorationLine: 'underline',
        color: APP_CONFIG.APP_THEME.colors.secondary,
        fontSize: 12,
        marginBottom: 8
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
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

export default withTheme(LoginScreen);
