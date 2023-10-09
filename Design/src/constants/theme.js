import {
    MD3LightTheme as DefaultTheme,
    DarkTheme as PapperDarkTheme
} from 'react-native-paper';
import lightColors from "../utils/data/colors/light.json"
import darkColors from "../utils/data/colors/dark.json"
import { Appearance, Dimensions } from 'react-native';

const light = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
        ...lightColors.colors,
         disabled: "#36373A",
    }
}
const dark = {
    ...PapperDarkTheme,
    myOwnProperty: true,
    colors: {
        ...darkColors.colors,
    disabled: "#36373A",

    }
}
export const isDark = Appearance.getColorScheme() === 'dark'
export const {height,width} = Dimensions.get('window')
export const theme = light

