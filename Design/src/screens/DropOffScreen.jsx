import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, useTheme } from "react-native-paper"
const DropOffScreen = ({ navigation, route }) => {
    const theme = useTheme()
    const { data, tripData } = route.params;
    const pickUpData = data

    console.log(tripData)
    return <ScrollView>
        <View>
            <Text style={{
                marginLeft: 'auto'
            }} theme={{
                colors: {
                    onSurface: theme.colors.secondary
                }
            }}>{tripData?.tripNumber}</Text>
        </View>

        <View style={[styles?.row, { justifyContent: 'space-between' }]}>
            <Text>{`DROP OFF DETAILS`}</Text>
            <View style={
                {
                    backgroundColor: theme.colors.primary,
                    padding: 4
                }
            }>
                <Text style={{
                    marginLeft: 'auto'
                }} theme={{
                    colors: {
                        onSurface: theme.colors.secondary
                    }
                }}> Laod# {pickUpData?.load.slice(0, 3)}</Text>
            </View>



        </View>
        {/* Maps view */}
        <View style={{
            height: 200,
            backgroundColor: theme.colors.primary,
            borderRadius: 16
        }}></View>
        {/* end */}
        {/* date and time */}
        <View style={styles.row}>
            <View >
                <Text>{pickUpData?.toDate ?? 'Nov 11th, 2021'}</Text>
                <Text style={{
                    fontWeight: 'bold'
                }} theme={{
                    colors: {
                        onSurface: theme.colors.primary
                    }
                }} variant="labelSmall">Estimated delivery</Text>
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
            alignItems: 'center'
        }} >
            <View>
                <Text>Drop Off#</Text>
                <Text style={{
                    opacity: 0.3
                }} >Assigned by warehouse</Text>
            </View>
            <View>
                <Text style={{
                    fontSize: 42
                }} theme={{
                    colors: {
                        onSurface: theme.colors.secondary
                    }
                }}>198</Text>

            </View>


        </View>

        {/* Load summary */}
        <View style={{ marginTop: 8 }}>
            <Text>LOAD SUMMARY</Text>
            <Text variant="labelSmall">Commodity Description</Text>
            <Text style={{ opacity: 0.3 }}>{pickUpData?.address?.address}</Text>
            <Text style={{ marginVertical:12, fontSize:18 }} theme={{
                colors: {
                    onSurface:theme.colors.error
                }
            }} >{pickUpData?.address?.city}</Text>
            <View style={{ marginVertical: 8 , flexDirection:'row'}}>
                <View>
                    <Text >{`Trailer type`}</Text>
                    <Text style={{ opacity: 0.3 }}>{tripData?.truck?.type?.name}</Text>
                </View>
                <View style={{
                    marginLeft:16
                }}>
                    <Text >{`Trailer #`}</Text>
                    <Text style={{ opacity: 0.3 }}>{tripData?.truck?.truckNumber}</Text>
                </View>
                
            </View>
        </View>
        {/* end */}
        {/* Pick Up Documents */}
        <View style={[styles.row, { marginTop: 8, alignItems: 'center', backgroundColor: '#121415', padding: 8 }]}>
            <Text>Dop Off Documents</Text>
            <Text style={{
                fontSize: 42
            }} theme={{
                colors: {
                    onSurface: theme.colors.secondary
                }
            }}>1</Text>

        </View>
        {/* End */}

        {/* Back Button */}
        <View style={{
            marginTop: 20
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
export default DropOffScreen
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginVertical: 12,
        justifyContent: 'space-between'

    }
})