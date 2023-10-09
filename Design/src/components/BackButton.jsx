import { Text } from "react-native-paper"
import { Image, TouchableOpacity, View } from "react-native"
import { APP_CONFIG } from "../constants"
export default function BackButton({ onPress }) {
    return <TouchableOpacity onPress={onPress}>
        <View style={{
            marginBottom: 12,
            marginLeft:12
        }}>
            <Image
                source={APP_CONFIG.IMAGES.BACK_ICON}
            />
        </View>
        
    </TouchableOpacity>
}