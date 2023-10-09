import { StyleSheet,Text } from "react-native"
import {APP_CONFIG} from "../constants"
const BrandName = () => {
    return <Text style={styles.brandTitle} >LOGIZIP</Text>
}
export default BrandName

const styles = StyleSheet.create({
    brandTitle: {
        color: APP_CONFIG.APP_THEME.colors.secondary,
        fontSize: 30,
        fontWeight: 'bold'
    },
})