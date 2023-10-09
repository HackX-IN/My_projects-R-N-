import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import { APP_CONFIG } from '../constants';

const UploadAvatar = () => {
    const [avatarUri, setAvatarUri] = useState(null);

    const handleSelectAvatar = () => {
        alert('upload')
        // ImagePicker.showImagePicker(
        //     {
        //         title: 'Select Avatar',
        //         storageOptions: {
        //             skipBackup: true,
        //             path: 'images',
        //         },
        //     },
        //     (response) => {
        //         if (response.didCancel) {
        //             console.log('User cancelled image picker');
        //         } else if (response.error) {
        //             console.log('ImagePicker Error: ', response.error);
        //         } else if (response.customButton) {
        //             console.log('User tapped custom button: ', response.customButton);
        //         } else {
        //             setAvatarUri(response.uri);
        //         }
        //     }
        // );
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                {avatarUri ? (
                    <Avatar.Image size={64} source={{ uri: avatarUri }} />
                ) : (
                    <Avatar.Image size={64} icon="account" />
                )}
            </View>
            <Button mode='text' textColor={APP_CONFIG.APP_THEME.colors.secondary} onPress={handleSelectAvatar} >
                Upload
                Picture
            </Button>
        </View>
    );
};

export default UploadAvatar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 4,
    },
});
