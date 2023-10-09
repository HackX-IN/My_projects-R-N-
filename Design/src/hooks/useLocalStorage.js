import EncryptedStorage from 'react-native-encrypted-storage';
export const useLocalStorage = () => {
    const setUserSession = async (value) => {
       
        try {
            await EncryptedStorage.setItem(
                "user_session",
                JSON.stringify({ ...value })
            );

            // Congrats! You've just stored your first value!
        } catch (error) {
            // There was an error on the native side
        }
    }
     const getUserSession = async () => {
        try {
            const value = await EncryptedStorage.getItem("user_session");
            return JSON.parse(value);
        } catch (error) {
            // There was an error on the native side
        }
    }
     const removeUserSession = async () => {
        try {
            await EncryptedStorage.removeItem("user_session");
            // Congrats! You've just stored your first value!
        } catch (error) {
            // There was an error on the native side
        }
     }
    return {
        setUserSession,
        getUserSession,
        removeUserSession

    }
}