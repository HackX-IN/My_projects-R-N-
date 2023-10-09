import { APP_CONFIG } from '../constants';
import React, { useCallback, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const OTPInput = ({ length, onComplete, phoneNumber }) => {
    const [otp, setOTP] = useState('');
    const inputRefs = useRef([]);
    const handleChangeText = useCallback(
        (value, index) => {
            const newOTP = otp.split('');
            newOTP[index] = value;
            setOTP(newOTP.join(''));

            if (index === length - 1) {
                // Last digit entered
                onComplete(newOTP.join(''));
            } else if (value !== '') {
                // Move focus to the next input
                inputRefs.current[index + 1].focus();
            }
        }, [otp]
    )
    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
            // Move focus to the previous input on Backspace press
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.labelText} > A code has been sent to {phoneNumber}</Text>

            <View style={styles.inputContainer}>
                {Array(length)
                    .fill(0)
                    .map((_, index) => (
                        <TextInput
                            key={index}
                            style={styles.input}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(value) => handleChangeText(value, index)}
                            onKeyPress={(event) => handleKeyPress(event, index)}
                            value={otp[index] || ''}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                        />
                    ))}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16
    },
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',

    },
    labelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20
    },
    input: {
        width: 40,
        height: 60,
        borderWidth: 1,
        borderRadius: 40,
        borderWidth: 1,
        borderRadius: 4,
        textAlign: 'center',
        backgroundColor: APP_CONFIG.APP_THEME.colors.disabled,
        color: 'white',
        marginHorizontal: 8

    },
});

export default OTPInput;
