import { useMemo } from "react"
import { APP_CONFIG } from "../constants"
import { StyleSheet, View } from "react-native"
import { Text, useTheme } from "react-native-paper"
const PickDropCard = ({ cardDetails }) => {
    const theme = useTheme()
    const address = useMemo(() => cardDetails?.address?.address, [cardDetails])
    const loadNumber = useMemo(() => `LOAD #${cardDetails?.load.slice(4, 8) ?? '#'} `)

    const title = useMemo(() => {
        switch (cardDetails.type) {
            case 'pick-up':
                return 'PICK UP'
            case 'drop-off':
                return 'DROP OFF'
            default:
                return ""

        }
    },[cardDetails])
    return <View style={styles.container}>
        <View style={
            styles.row
        }>
            <Text variant="labelSmall">{title}</Text>
            <Text variant="labelSmall">{loadNumber}</Text>
        </View>
        <View style={
            styles.row
        }>
            <Text variant="labelSmall">#{address}</Text>
            <Text variant="labelSmall">{loadNumber}</Text>
        </View>
    </View>
}

export default PickDropCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
        padding: 20,
        borderRadius: 16,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})