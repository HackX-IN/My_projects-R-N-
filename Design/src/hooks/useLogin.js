import { useMemo, useState } from "react"
import { useLoginMutation, useSendOtpMutation } from "../redux/rtk-query/auth"
import { useFormValidation } from "./useFormValidations"
import { loginValidation } from "../utils/schema/validationSchema"
import makeApiRequest from "../utils/api-middleware"
import axios from "axios"
import { useDispatch } from "react-redux"
import { authSuccess } from "../redux/slice/auth-slice"
import { useLocalStorage } from "./useLocalStorage"
import { APP_CONFIG } from "../constants"
import { successToast } from "../utils/toast"
export const useLogin = (navigation) => {
    /**
    * * initial value
    */
    const initialValues = {
        userName: 'xchander@gmail.com',
    }
    const {setUserSession}= useLocalStorage()
    const [login] = useLoginMutation()
    const [sendOtp] = useSendOtpMutation()
    const dispatch = useDispatch()
    // intialise the loading state.
    const [isLoading, setLoading] = useState(false)

    // Inialise the form validation hook
    const {
        values,
        errors,
        validateFeild,
        handleChange,
        handleBlur
    } = useFormValidation(
        initialValues,
        loginValidation
    )

    /**
    * * Keep track of state of login button
    */
    const isBtnDisabled = useMemo(() => !isLoading && !errors, [isLoading, errors])

    /**
     *  * Valiodate the login field and initiate the login api call, if field is validated.
     * 
     */
    const handleSubmit = () => {
      
        validateFeild().then(resp => {
        
            if (resp) {
                handleOtpLogin()
            }
        })
    }

    const handleLogin = async () => {
        try {
            setLoading(true)
            const resp = await login({
                email: values?.email,
                password: values?.password
            }) 
            // console.log(resp)
            const payload = { ...resp.data }
            // console.log('login', payload)
            if (payload) {
                setUserSession({...resp.data})
                dispatch(authSuccess({...payload}))
                navigation.navigate(APP_CONFIG.SCREENS.MENU_SCREEN)
                
            }
            
        } catch (e) {

        } finally {
            setLoading(false)
        }
    }
    const handleOtpLogin = async () => {
        try {
            setLoading(true)
          const resp = await sendOtp({
              userName: values?.userName
          })
            if (resp?.data?.message) {
                successToast({
                    title: 'Sent OTP',
                    body: resp?.data?.message
                })
                navigation.navigate(APP_CONFIG.SCREENS.OTP_SCREEN, {
                    emailorphone: values?.userName
                })
            }

      } catch (error) {
        
      } finally {
            setLoading(false)
      }
    }
    return {
        isLoading,
        handleSubmit,
        isBtnDisabled,
        values,
        errors,
        handleBlur,
        handleChange,
        handleOtpLogin
    }

}