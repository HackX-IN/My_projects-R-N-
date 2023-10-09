import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import {  withTheme, } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { APP_CONFIG } from "../constants"
const PhoneInput = ({phoneNumber, handlePhoneInput}) => {
    const [countryCode, setCountryCode] = useState('+1');

    const handleCountryCodeChange = (code) => {
        setCountryCode(code);
    };

    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.labelText} >Enter your phone number</Text>
            <View style={styles.inputContainer}>
                <View
                    style={styles.countryCodeConatiner}
                >
                    <Text style={styles.countryCode}>{countryCode}</Text>
                    
                </View>
                <TextInput
                    style={styles.phoneNumberInput}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={handlePhoneInput}
                    keyboardType="phone-pad"
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16
    },
    labelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: 'row'
    },
    
    countryCodeConatiner: {
       width:'10%',
        height: 40,
        alignSelf: 'center',
        justifyContent:'center',
        borderBottomWidth: 0.9,
        borderBottomColor: '#36373A',
    },
    countryCode: {
        color: 'white',
        marginBottom: 2,

    },
    phoneNumberInput: {
        flex: 1,
        width: '70%',
        height: 40,
        marginLeft: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor:APP_CONFIG.APP_THEME.colors.disabled,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        color:'white'
    },
});

export default PhoneInput;
