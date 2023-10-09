import { useMemo } from "react";
import { APP_CONFIG } from "../constants";
import { Pressable, StyleSheet, View, TextInput } from "react-native";
import {  withTheme, Text, Button, useTheme } from "react-native-paper";

function InputField({ theme, centerAligned, error = null, helperText, ...props }) {

    const isTextAlign = useMemo(() => {
        // return props.value ? 'left' : centerAligned ? 'center' :'left'
        return centerAligned && 'center'
    }, [props.value, centerAligned])
  
    const isError = useMemo(() => error?true:false, [error])
   
    return <>
        <TextInput
            {...props}
            style={[styles.contentStyle, {
                textAlign: isTextAlign,
                borderColor: isError && theme.colors.error
            }]}
            placeholderTextColor={'#645A3A'}
            
            selectionColor={theme.colors.secondary}
         
            
        />
        {
            error && <Text style={styles.helperText}>{error }</Text>
        }


    </>


}

const styles = StyleSheet.create({
    contentStyle: {
        backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
        color: APP_CONFIG.APP_THEME.colors.secondary,
        borderWidth: 2,
        borderRadius:16
        
    },
    
    helperText: {
        color: APP_CONFIG.APP_THEME.colors.error,
        fontSize: 12,
        marginBottom: 4,


    }
})

export default withTheme(InputField)