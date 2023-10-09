import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Button, withTheme, } from 'react-native-paper';
import { APP_CONFIG } from "../constants"
import Shadow from 'react-native-shadow';
import { useMemo } from 'react';
const TruckButton = ({  disbaled = false, showTruck=true, theme, onPress,isLoading=false, showBtn =true, btnText = "Accept & continue" }) => {
  
    // const btnColor = disbaled ? '#36373A' : theme.colors.secondary
    const btnDisabled = useMemo(()=> isLoading || disbaled,[isLoading,disbaled])

    return <View style={styles.container}>
        {
            showTruck && <View style={styles.imgContainer}>
                <Image style={styles.btnImg} source={APP_CONFIG.IMAGES.TRUCK_BANNER} />
            </View>
        }
        
        {
            showBtn && <Button mode='contained-tonal' loading={isLoading} disabled={btnDisabled} textColor={theme.colors.primary} onPress={onPress}>
                {btnText}
            </Button>
        }



    </View>
}

export default withTheme(TruckButton)


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        marginTop: '16%'

    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: -12,
        // position: 'absolute',
        // bottom: '18%',
        // left: '50%',
        // right: '50%',
        zIndex: 1
    },
    btnImg: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    shadowStyle: {
        width: 200,
        height: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
    },

    // loginBtn: {
    //    fontSize:
    // },


});
