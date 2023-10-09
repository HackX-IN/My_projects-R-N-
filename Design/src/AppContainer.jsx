// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme as MD3DefaultTheme, DarkTheme as MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import { APP_CONFIG } from './constants';
import Navigations from './Navigations';
import Footer from './components/Footer';
import {store} from "./store"
import AppWrapper from './AppWrapper';
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: APP_CONFIG.APP_THEME });
export default function AppContainer() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const paperTheme = isDarkTheme ? MD3DarkTheme : MD3DefaultTheme;
    const navigationTheme = isDarkTheme ? DarkTheme : LightTheme;

    return (
        <PaperProvider theme={APP_CONFIG.APP_THEME}>
            <Provider store={store}>
                <AppWrapper>
                    {/* App main screens */}
                    <NavigationContainer  theme={LightTheme}>
                        <Navigations />

                    </NavigationContainer>
                    {/* Footer */}
                    <Footer />
                    {/* end */}
                </AppWrapper>
               
            </Provider>
            
        </PaperProvider>
    );
}
