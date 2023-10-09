import { StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { APP_CONFIG } from "../constants"
const TermsAndConditions = () => (
    <Text style={styles.helperText}>
        By entering you agree to   <Text style={styles.boldText}>Terms and conditions</Text> and <Text style={styles.boldText}>Privacy Policy</Text>
    </Text>
)
export default TermsAndConditions

const styles = StyleSheet.create({
   
    helperText: {
        marginVertical: 12,
        fontSize: 12,
        justifyContent: 'flex-end'
    },
    boldText: {
        color: APP_CONFIG.APP_THEME.colors.secondary,
    },
   
})