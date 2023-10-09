import { useState,useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { authSuccess } from './redux/slice/auth-slice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
const AppWrapper = ({children}) => {
    const [isLoading, setIsLoading] =useState(true);
    const { getUserSession } = useLocalStorage()
    const dispatch = useDispatch()
    const theme = useTheme()
    useEffect(() => {
        async function getValue() {
            const value = await getUserSession()
            if (value) {
                console.log('local value', value)
                dispatch(authSuccess({...value}))
            }
            
            setTimeout(() => {

                setIsLoading(false);
            }, 1000);
        }
        getValue()
    }, []);
    return isLoading ? null : <SafeAreaView style={{
        
        flex: 1,
        backgroundColor:theme.colors.background
    }}>{children }</SafeAreaView> ;
}

export default AppWrapper