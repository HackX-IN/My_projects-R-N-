import { APP_CONFIG } from '../constants';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import { Avatar, Text,Surface, useTheme,IconButton } from 'react-native-paper';
export default function ProfileInfoCard({ onPress, src = null, name = "John Doe", email ="john.doe@example.com"}) {
    const theme = useTheme()
    return <View style={styles.container}>
        {src ? (<Avatar.Image
            rounded
            source={{
                uri: src
            }}

            style={styles.avatar}
            theme={{
                colors: {
                    primary: theme.colors.background
                }
            }}
        />) : <Avatar.Text
            rounded
            label={name.slice(0,2).toUpperCase()}

            style={styles.avatar}
            theme={{
                colors: {
                    primary: theme.colors.background
                }
            }}
        />}
        
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email }</Text>
        </View>
        <Pressable onPress={onPress}>
            <Image source={APP_CONFIG.IMAGES.ARROW_RIGHT}/>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor:APP_CONFIG.APP_THEME.colors.primary
    },
    avatar: {
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
       
        
    },
    email: {
        fontSize: 14,
        color: '#999',
    },
});
