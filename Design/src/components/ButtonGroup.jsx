import { Pressable, StyleSheet, View } from "react-native"
import { APP_CONFIG } from "../constants"
import { Text } from "react-native-paper"
import { useCallback, useMemo } from "react"
const ButtonGroup = ({ buttons = [], value, onValueChange }) => {
    const getBackColor = useCallback((v) => {
        return v == value ? APP_CONFIG.APP_THEME.colors.secondary : APP_CONFIG.APP_THEME.colors.primary
    }, [value])
    const getBtnRadius = useCallback((btnIdx) => {
        let temp = {}
        if (btnIdx != buttons.length - 1) {
            temp = {
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5
            }

        } else {
            temp = {
                borderTopEndRadius: 5,
                borderBottomEndRadius: 5
            }
        }
        return temp
    }, [])
    const getBtnTextStyle = useCallback((v) => {
        let temp = {}
        if (v == value) {
            temp = {
                fontWeight: 'bold',
                color: 'black'
            }
        } else {
            temp = {
                opacity: 0.6
            }
        }
        return temp

    }, [value])
    return <View style={styles.btnContainer}>
        {
            buttons.map((b, i) => (

                <Pressable key={i} style={[styles.btn, {
                    backgroundColor: getBackColor(b?.value),
                    ...getBtnRadius(i)
                }]}
                    onPress={() => onValueChange(b?.value)}>

                    <Text style={[
                        {
                            textAlign: 'center',
                            fontSize: 12,
                            ...getBtnTextStyle(b?.value),

                        }
                    ]}>{b?.label}</Text>


                </Pressable>
            )
            )
        }
    </View>
}
export default ButtonGroup

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 16,
        border: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: APP_CONFIG.APP_THEME.colors.primary,
        flex: 1 / 2,
        paddingVertical: 12,
    

        // borderRadius: 5 0 0 5




    }
})