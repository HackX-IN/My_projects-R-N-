import { View ,SafeAreaView, StyleSheet,ScrollView} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, useTheme } from "react-native-paper"
const PickUpScreen = ({ navigation, route }) => {
    const theme = useTheme()
    const { data, tripData } = route.params;
    const pickUpData = data
    return <ScrollView>
        <View>
            <Text style={{
                marginLeft:'auto'
            }} theme={{
                colors: {
                    onSurface:theme.colors.secondary
                }
            }}>{tripData?.tripNumber}</Text>
        </View>

        <View style={[styles?.row,{justifyContent:'space-between'}]}>
            <Text>{`PICK UP DETAILS`}</Text>
            <View style={
                {
                    backgroundColor: theme.colors.primary,
                    padding:4
                }
            }>
                <Text style={{
                    marginLeft: 'auto'
                }} theme={{
                    colors: {
                        onSurface: theme.colors.secondary
                    }
                    }}> Laod# {pickUpData?.load.slice(0,3)}</Text>
            </View>

           
            
        </View>
        {/* Maps view */}
        <View style={{
            height: 200,
            backgroundColor: theme.colors.primary,
            borderRadius:16
        }}></View>
        {/* end */}
        {/* date and time */}
        <View style={styles.row}>
            <View >
                <Text>{pickUpData?.toDate ?? 'Nov 11th, 2021'}</Text>
                <Text style={{
                    fontWeight:'bold'
                }} theme={{
                    colors: {
                        onSurface:theme.colors.primary
                    }
                }} variant="labelSmall">Estimated Pickup</Text>
            </View>
            <View >
                <Text>{pickUpData?.toTime ?? '4:35pm'}</Text>
                <Text style={{
                    fontWeight: 'bold'
                }} theme={{
                    colors: {
                        onSurface: theme.colors.primary
                    }
                }} variant="labelSmall">Time</Text>
            </View>

         </View>
        {/* end */}

        <View style={{
            backgroundColor: theme.colors.primary,
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center'
        }} >
            <View>
                <Text>Pickup#</Text>
                <Text style={{
                    opacity: 0.3
                }} >Assigned by warehouse</Text>
            </View>
            <View>
                <Text style={{
                    fontSize:42
                }} theme={{
                    colors: {
                        onSurface:theme.colors.secondary
                    }
                }}>36</Text>
                
            </View>
          
            
        </View>

        {/* Load summary */}
        <View style={{ marginTop: 8}}>
            <Text>LOAD SUMMARY</Text>
            <Text variant="labelSmall">Commodity Description</Text>
            <Text style={{opacity:0.3}}>{pickUpData?.address?.address}</Text>
         </View>
        {/* end */}
        {/* Pick Up Documents */}
        <View style={[styles.row, { marginTop: 8, alignItems:'center', backgroundColor:'#121415',padding:8 }]}>
            <Text>Pick up Documents</Text>
            <Text style={{
                fontSize:42
            }} theme={{
                colors: {
                    onSurface:theme.colors.secondary
                }
            }}>1</Text>
           
        </View>
        {/* End */}
        
        {/* Back Button */}
        <View style={{
            marginTop:20
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{
                    textAlign: 'center'
                }} theme={{
                    colors: {
                        onSurface: theme.colors.error
                    }
                }}> Back</Text>
            </TouchableOpacity>
        </View>
        
        {/* End */}
    </ScrollView>
}
export default PickUpScreen
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginVertical: 12,
        justifyContent:'space-between'
        
    }
})