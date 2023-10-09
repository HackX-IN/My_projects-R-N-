import { StyleSheet, Text, View } from "react-native"
import { APP_CONFIG } from "../constants"
export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <Text style={[styles.footerText, styles.copyTxt]}> &copy;Copyright 2023. Logizip LLC</Text>
            <Text style={[styles.footerText, styles.versionTxt]}> Ver 1.0.0</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: APP_CONFIG.APP_THEME.colors.background,
        flexDirection: 'row',
        paddingHorizontal:12,
        zIndex: 1,
        justifyContent:'space-between'
    },
    footerText: {
        color: 'white',
        fontSize: 8,
        fontWeight: '500',
    },
    versionTxt: {
       right:0
    }
})