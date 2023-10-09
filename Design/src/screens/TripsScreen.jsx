
import { APP_CONFIG } from "../constants";
import React, { useCallback, useMemo } from "react";
import { StyleSheet, View, Image, FlatList, Pressable, TouchableOpacity } from "react-native";
import { SegmentedButtons, Text, useTheme } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { useGetTripsQuery } from "../redux/rtk-query/trips";
import ButtonGroup from "../components/ButtonGroup";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const TripsScreen = ({ navigation }) => {
    const theme = useTheme()
    const [value, setValue] = React.useState('assigned');
    const { data, isLoading, error } = useGetTripsQuery()
    const tripsList = useMemo(() => data?.trips, [data])


    console.log(tripsList, "trip list loaded")
    const onSurfaceColor = useCallback(() => {s
        return theme.colors.secondary
    }, [])
    const renderItem = ({ item, index, separators }) => {
        const handleItemClick = () => {
            navigation.navigate(APP_CONFIG.SCREENS.TRIPS_DETAIL_SCREEN, {
                trip_id: item?._id
            })
        }
        const currency = item?.loads[0]?.charge?.currency?.shortCode
        const amount = item?.loads[0]?.charge?.loadCharges
        return <>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ?  APP_CONFIG.APP_THEME.colors.primary:'black',
                    }
                ]}
                onPress={handleItemClick}>
                <TripCard tripNumber={item?.tripNumber} amount={`${currency} ${amount}`} status={item?.status} />
            </Pressable>

        </>
    }
    const TripCard = ({ tripNumber, amount, status }) => (<View style={styles.menuCard}>
        <View style={{
            flex:1/2
        }} >
            <Text style={{fontSize:16}}>{tripNumber}</Text>
            <Text style={{ opacity: 0.3, fontSize:12, textAlign:'left', fontWeight:'bold',marginLeft:-4 }}> Amount: {amount}</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginLeft:'auto'
        }}>
            <Text style={{
                textTransform: 'uppercase',
                fontSize:12,
            }} theme={{
                colors: {
                    onSurface: status?.color ?? onSurfaceColor()
                }
            }}>{status?.name ?? ''}</Text>
            <View style={{
                width: 4,
                alignSelf: 'center',
                marginBottom: 12
            }} >
                <Image style={{
                    width: 30,
                    height:30
                }} source={APP_CONFIG.IMAGES.ARROW_RIGHT} />
            </View>


        </View>

    </View>)

    return <>
        {/*  */}
        <SafeAreaView style={styles.container}>
            <Text variant="titleMedium">Trips</Text>
            <Text style={{

                opacity: 0.6
            }} variant="labelSmall">Jan 15th, 2021</Text>
            <View style={{ marginVertical: 12 }}>
                <ButtonGroup
                    value={value}
                    density="small"

                    style={{
                        borderRadius: 16
                    }}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'assigned',
                            label: 'Assigned Trips',
                        },
                        {
                            value: 'delivered',
                            label: 'Delivered',
                        },

                    ]}
                />
            </View>

        </SafeAreaView>
        <FlatList
            data={tripsList ?? []}
            renderItem={renderItem}
        />
    </>

}

export default TripsScreen
const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        paddingRight:24
    },
    menuCard: {
        flexDirection: 'row',
       
        paddingVertical: 32,
        paddingHorizontal: 24,
        marginTop: 24,
        maxWidth:375,
        alignItems: 'center',
    
       

    }
})