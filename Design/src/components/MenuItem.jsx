
import React from 'react';
import { Text ,Badge,useTheme} from "react-native-paper"
import { View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { APP_CONFIG } from '../constants';
export default function MenuItem({ title, subtitle, iconName = '', onPress, badgeCount = null }) {
    const theme = useTheme()
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={iconName} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                {(
                    <Badge visible={badgeCount} size={32} theme={{
                        colors: {
                            error: theme.colors.primary,
                            onError:theme.colors.secondary
                        }
                    }}>{ badgeCount}</Badge>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

        padding: 16,

    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
    },
    title: {
        fontSize: 16,

    },
    subtitle: {
        fontSize: 12,
        color: APP_CONFIG.APP_THEME.colors.primary
    },
    badgeContainer: {
        backgroundColor: 'red',
        borderRadius: 12,
        paddingVertical: 2,
        paddingHorizontal: 6,
        marginLeft: 8,
    },
    badge: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});