import UploadAvatar from "../components/UploadAvatar"
import AuthWrapper from "../components/AuthWrapper"
import InputField from "../components/InputField"
import { signUpValidation } from '../utils/schema/validationSchema'
import { SafeAreaView, View, StyleSheet } from "react-native"
import { Button, Text, useTheme } from "react-native-paper"
import { useFormValidation } from "../hooks/useFormValidations"
import TermsAndConditions from "../components/TermsAndCondition"
const SignUpScreen = () => {
    const theme = useTheme()
    /**
    * *Intial values 
   */
    const initialValues = {
       
        password: 'seven3kkk!@',
        confirmPassword:''
      
    }
    const { values, errors, validateFeild, handleChange, handleBlur, } = useFormValidation(
        initialValues,
        signUpValidation
    );
    return (
        <SafeAreaView style={styles.container}>
            <Text variant="titleMedium" style={{
                marginVertical:8
            }}>Sign Up</Text>
            
            <View style={styles.row}>
                <UploadAvatar />
            </View>
            <View style={styles.row}>

                {/* Driver first  name */}
                <View style={{
                    width:'50%'
                }}>
                    <Text theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }} variant="labelSmall">First Name</Text>
                    <Text variant="titleMedium">Driver One</Text>
                </View>

                <View>
                    {/*  Driver Last Name */}
                    <Text theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }} variant="labelSmall">Last Name</Text>
                    <Text variant="titleMedium">Driver One</Text>
                </View>

            </View>
            <View style={styles.row}>

                {/* Driver first  name */}
                <View style={{
                    width: '50%'
                }}>
                    <Text theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }} variant="labelSmall">Phone Number</Text>
                    <Text variant="titleMedium">+1 9876543210</Text>
                </View>
            </View>
            <View style={styles.row}>

                {/* Driver first  name */}
                <View style={{
                    width: '50%'
                }}>
                    <Text theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }} variant="labelSmall">Email Address</Text>
                    <Text variant="titleMedium">driver1@example.com</Text>
                </View>
            </View>

            <View style={{marginTop:16}}>
                <InputField
                    centerAligned={true}
                    placeholder="PASSWORD"
                    autoCapitalize="none"
                    onChangeText={(text) => handleChange('password', text)}
                    onBlur={() => handleBlur('password')}
                    value={values?.password}
                    error={errors?.password}

                />
            </View>
            <View style={{ marginVertical: 16 }}>
                <InputField
                    placeholder="CONFIRM PASSWORD"
                    centerAligned={true}
                    autoCapitalize="none"
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                    onBlur={() => handleBlur('confirmPassword')}
                    value={values?.confirmPassword}
                    error={errors?.confirmPassword}

                />
            </View>
            {/* Terms and conditions */}
            <TermsAndConditions />
            {/* Buttons */}
            <Button mode="contained-tonal">
                Sign Up
            </Button>


        </SafeAreaView>

    )




}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: 16,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        height: 40,
        marginRight: 8,
    },
});