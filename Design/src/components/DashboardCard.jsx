import { StyleSheet, View } from "react-native"
import {Text, useTheme} from "react-native-paper"
import { APP_CONFIG } from "../constants"
const DashboardCard = ({
    right,
    center,
    left,
    showIcon
}) => {
    const theme = useTheme()
    return <View style={styles.card} >
        <View style={styles.right}>
            {right}
        </View>
        <View style={styles.center}>
           {center}
        </View>
        <View style={styles.left}>
           {left}
        </View>
        {showIcon && <View style={styles.icon}>
            <Text theme={{
                colors: {
                    onSurface: theme.colors.secondary
                }
            }}> {`>`} </Text>
        </View> }
       
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    subContainer: {

        paddingHorizontal: 16,
        paddingVertical: 16
    },
    card: {
        backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:8
    },

})
export default DashboardCard