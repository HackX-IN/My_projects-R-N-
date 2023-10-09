import { KeyboardAvoidingView, StyleSheet ,View} from "react-native"
import BrandName from "./BrandName"
import { Text } from "react-native-paper"
import { APP_CONFIG } from "../constants"
import TruckButton from "./TruckButton"
import TermsAndConditions from "./TermsAndCondition"
export default function AuthWrapper({ showBrand = true, showTruck, children, isLoading = false, btnText = 'Login', title, isBtnDisabled, handlePress, showBtn = true }) {

    return <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.body}>
            {/* Brand name will be common for all screen */}
            {showBrand && <BrandName /> } 
            {/* Header title */}
            {title && <Text style={styles.title}>{ title }</Text>}
          
            {/* End */}

            <View style={styles.content}>
                
                {children}
            </View>

           <TermsAndConditions/>
            <View style={styles.footer}>
                <TruckButton btnText={btnText} showTruck={showTruck} isLoading={isLoading} showBtn={showBtn} disbaled={isBtnDisabled} onPress={handlePress} />
            </View>
        </View>
        
    </KeyboardAvoidingView>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    body: {
        paddingHorizontal: 20,
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        marginVertical: 24,
      
    },
    helperText: {
        marginVertical: 12,
        fontSize: 12,
        justifyContent:'flex-end'
    },
    boldText: {
        color: APP_CONFIG.APP_THEME.colors.secondary,
    },
    content: {
        paddingHorizontal: 20,
        marginTop:32
    },
})