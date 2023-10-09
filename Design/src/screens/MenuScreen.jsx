import { APP_CONFIG } from "../constants";
import MenuItem from "../components/MenuItem";
import ProfileInfoCard from "../components/ProfileInfoCard";
import { SafeAreaView, ScrollView ,StyleSheet,View,TouchableOpacity} from "react-native";
import { Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/auth-slice";
import { useLocalStorage } from "../hooks/useLocalStorage";


export default function MenuScreen({ navigation }) {
    const dispatch = useDispatch()
    const {removeUserSession} =useLocalStorage()
    const handleClick = (opt) => {
         navigation.navigate(opt)
    }
    const user = useSelector(state => state?.auth?.user)
    const handleLogout = () => {
        removeUserSession()
        dispatch(logout())
        navigation.navigate(APP_CONFIG.SCREENS.AUTH_SCREEN)
    }
    return <SafeAreaView style={styles.container}>
        <ScrollView>
            {/* Profile info section */}
            <ProfileInfoCard
                name={user?.fullName}
                email={user?.email}
                
            />
            {/* END */}
            <MenuItem
                title='My Dashboard'
                subtitle='Take me to dashboard'
                iconName={APP_CONFIG.IMAGES.MY_DASHBOARD}
                onPress={()=>handleClick(APP_CONFIG.SCREENS.DASHBOARD_SCREEN)}
            />
            <MenuItem
                title='My Trips'
                subtitle='Take me to dashboard'
                iconName={APP_CONFIG.IMAGES.MY_TRIPS}
                onPress={() => handleClick(APP_CONFIG.SCREENS.TRIPS_SCREEN)}
            />
            <MenuItem
                title='My Expenses'
                subtitle='Take me to dashboard'
                iconName={APP_CONFIG.IMAGES.MY_EXPENSES}
            />
            <MenuItem
                title='Current Trip Document'
                subtitle='Take me to dashboard'
                iconName={APP_CONFIG.IMAGES.TRIP_DOCUMENT}
                badgeCount={4}
            />
            <MenuItem
                title='Logout'
                subtitle='Take me to dashboard'
                iconName={APP_CONFIG.IMAGES.LOGOUT}
                onPress={handleLogout}
            />
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerLink}>About</Text>
            </TouchableOpacity>
            
            <View style={styles.footerContent}>
                <View >
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Disclaimer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.footerLink]}>Privacy </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.marginLeft}>
                    <TouchableOpacity>
                        <Text style={[styles.footerLink]}>Terms and Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.footerLink]}> Refund & Cancellations  </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
           
        </View>
    </SafeAreaView>
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom:20
       
    },
    footerContent: {
        flexDirection:'row'
    },
   
    footerLink: {
        fontSize: 12,
        marginVertical: 8,
       
        
       
    },
    marginLeft: {
        marginLeft:16
    }
})