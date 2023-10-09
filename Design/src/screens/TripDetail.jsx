import { Text, useTheme } from "react-native-paper"
import { useLazyGetTripsByIdQuery } from "../redux/rtk-query/trips";
import React, { useCallback, useMemo } from "react";
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import PickDropCard from "../components/PickDropCard";
import TruckButton from "../components/TruckButton";
import { APP_CONFIG } from "../constants";

const TripDetailsScreen = ({ route, navigation }) => {
    const { trip_id } = route.params;
    const theme = useTheme()
    const [trigger, { data, isLoading }] = useLazyGetTripsByIdQuery()
    React.useEffect(() => {
        console.log(trip_id)
        if (trip_id) {
            trigger(trip_id)
        }
    }, [trip_id])
    // console.log(data)
    const tripData = useMemo(() => data, [data])
    const optimizedRoutes = useMemo(() => data?.optimizedRoutes,[data])
    console.log(data)
    const pickUpData = useMemo(() => data?.loads[0]?.addressRoutes.filter((r)=>r.type === 'pick-up')[0], [data])
    const dropOff = useMemo(() => data?.loads[0]?.addressRoutes.filter((r) => r.type === 'drop-off')[0], [data])
    const renderItem = ({ item, index, separators }) => {
       
        const handleClick = () => {
            switch (item?.type) {
                case 'pick-up':
                    return navigation.navigate(APP_CONFIG.SCREENS.PICK_UP_SCREEN, {
                        data: item,
                        tripData:tripData
                    })
                case 'drop-off':
                    return navigation.navigate(APP_CONFIG.SCREENS.DROP_OFF_SCREEN, { data: item, tripData: tripData })
                default:
                    return ''
            }
        }
        return <View style={{
            marginVertical:8
        }}>
            <TouchableOpacity onPress={handleClick}>
                <PickDropCard
                    cardDetails={item}
                   

                />
            </TouchableOpacity>
            
        </View>
       
    }
    return <>
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between'
            }}>
                <Text variant="bodyMedium">TRIP DETAILS</Text>
                <Text variant="bodyMedium">{tripData?.tripNumber}</Text>
            </View>
            <View style={{
                marginVertical:8
            }}>
                <FlatList
                    data={optimizedRoutes ?? []}
                    renderItem={renderItem}
                />
            </View>
            <View style={{
           
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#121415',
                paddingHorizontal: 16,
                paddingVertical:12
                
            }}>
                <Text>Trips Documents</Text>
                <Text theme={{
                    colors: {
                        onSurface:theme.colors.secondary
                    }
                }}>7</Text>
                <Text style={{
                    fontSize:32
                }} theme={{
                    colors: {
                        onSurface: 'green'
                    }
                }}>{`>` }</Text>
            </View>
            <View style={styles.footer}>
                <TruckButton btnText={'Start Trip'} showTruck  showBtn={true}  />
            </View>
        </SafeAreaView>
    </>
}

export default TripDetailsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        flex:1
        
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
})