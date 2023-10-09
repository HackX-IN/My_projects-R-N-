import React from "react"
import DashboardCard from "../components/DashboardCard"
import { APP_CONFIG } from "../constants"
import { View, StyleSheet, SafeAreaView } from "react-native"
import { Surface, useTheme, Text, SegmentedButtons } from "react-native-paper"

const DashboardScreen = () => {
    const theme = useTheme()
    const [value, setValue] = React.useState('month');
    return <View styles={styles.container}>
        <View style={styles.subContainer}>
            <DashboardCard right={<>
                <Text>TOTAL HOS</Text>
                <Text style={styles.greenTxt}>5</Text>
            </>}
                center={<>
                    <Text theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }}> 17 MAY</Text>
                </>}
                left={<>
                    <Text>REMAINING HOS</Text>
                    <Text style={styles.redTxt}>3</Text>
                </>}

            />
            <DashboardCard showIcon right={<>
                <Text>Upcoming Trip</Text>
                <View>
                    <Text theme={{
                        colors: {
                            onSurface: theme.colors.primary
                        }
                    }} >START</Text>
                    <Text >CALGARY</Text>
                </View>

            </>}
                center={<>
                    <Text style={{
                        textAlign: 'center',

                    }} theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }}> 17 MAY</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 40
                    }} theme={{
                        colors: {
                            onSurface: theme.colors.secondary
                        }
                    }}> 2</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 12
                    }} > # OF STOPS</Text>
                </>}
                left={<>
                    <Text>Upcoming Trip</Text>
                    <View>
                        <Text theme={{
                            colors: {
                                onSurface: theme.colors.primary
                            }
                        }} >END</Text>
                        <Text >NEW YORK</Text>
                    </View>
                </>}
            />
            {/* Trips completed  */}
            <View style={[styles.trips]}>
                <Text>Trips completed</Text>
                <SafeAreaView style={{
                    flex:0.8,
                    marginLeft:'auto',
                    alignItems: 'center',
                }}>
                    <SegmentedButtons
                        density="small"
                        value={value}
                        onValueChange={setValue}
                        buttons={[
                            {
                                value: 'month',
                                label: 'Month',
                            },
                            {
                                value: 'week',
                                label: 'Week',
                            },

                        ]}
                    />
                </SafeAreaView> 
            </View>
            <View style={{
                flexDirection:'row'
            }}>
                <View style={{
                    marginLeft: 'auto',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical:12
                }}>
                    <Text style={[styles.greenTxt]}>10</Text>
                    <View >
                        <Text style={{
                            color: '#78F482',
                            textAlign: 'center'
                        }}>5%</Text>
                        <Text>Up since last week</Text>
                    </View>
               </View>
               
            </View>
            
            {/* end */}

            <DashboardCard 
                showIcon
                center={<>
                    <Text style={{
                        textAlign: 'center',

                    }}> Unpaid Expense Amount</Text>
                    <Text style={[{
                        textAlign: 'center',
                        fontSize: 40,
                        marginTop:12
                    }, styles.redTxt]} > $253</Text>
                   
                </>}
                
            />
        </View>

    </View>
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    subContainer: {

        paddingHorizontal: 16,
        paddingVertical: 16
    },
    trips: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:8
       
        
    },
    greenTxt: {

        fontSize: 40,
        color: '#78F482',
        textAlign: 'left'
    },
    redTxt: {

        fontSize: 40,
        color: '#EA6140',
        textAlign: 'center'
    }
})