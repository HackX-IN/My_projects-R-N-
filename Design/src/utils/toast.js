import Toast from "react-native-toast-message"
export const successToast = ({
    title = ' Toast title',
    body = 'Toast body'
}) => {
    Toast.show({
        type: 'success',
        text1: title,
        text2: body
    })
}
export const errorToast = ({
    title = ' Toast title',
    body = 'Toast body'
}) => {
    Toast.show({
        type: 'error',
        text1: title,
        text2: body
    })
}