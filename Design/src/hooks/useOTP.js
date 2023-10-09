import { useMemo, useState } from "react"
import { useLoginMutation, useSendOtpMutation ,useVerifyOtpMutation} from "../redux/rtk-query/auth"
import { useFormValidation } from "./useFormValidations"
import { loginValidation } from "../utils/schema/validationSchema"
import makeApiRequest from "../utils/api-middleware"
import axios from "axios"
import { useDispatch } from "react-redux"
import { authSuccess } from "../redux/slice/auth-slice"
import { useLocalStorage } from "./useLocalStorage"
import { APP_CONFIG } from "../constants"
import { errorToast, successToast } from "../utils/toast"
import { useNavigation } from "@react-navigation/native"
export const useOTP = () => {
    const navigation = useNavigation()
    const { setUserSession } = useLocalStorage()
    const [login] = useLoginMutation()
    const [sendOtp] = useSendOtpMutation()
    const [verifyOTP] = useVerifyOtpMutation()
    const dispatch = useDispatch()
    const [optValue, setOtpValue] = useState(null)
    // intialise the loading state.
    const [isLoading, setLoading] = useState(false)

   // resend otp state
   const [isResend,setIsResend] = useState(false)

    /**
    * * Keep track of state of login button
    */
    const isBtnDisabled = useMemo(() => !optValue   && (isLoading ||  isResend)  , [isLoading,isResend])

    /**
     *  * Valiodate the login field and initiate the login api call, if field is validated.
     * 
     */

    const handleResendOtp = async (userName = null) => {
        console.log(userName,"this is resend")
        if (!userName) {
            errorToast({
                title: 'USER NAME',
                body:'User name is required'
            })
            navigation.navigate(APP_CONFIG.SCREENS.LOGIN_SCREEN)
            return
        }
        try {
            setIsResend(true)
            const resp = await sendOtp({
                userName: userName
            })
            if (resp?.data?.message) {
                successToast({
                    title: 'Resend OTP',
                    body: 'Opt resend is success full.'
                })
            }

        } catch (error) {

        } finally {
            setIsResend(false)
        }
    }
    /**
     * * Verify the OTP
     */
    const handleVerifyOTP = async ({
        userName,
        otp
    }) => {
        if (!userName && !otp) {
            
            errorToast({
                title: 'Validation Error',
                body:'Please enter the OTP.'
                
            })
            return
        }
        try {
            setLoading(true)
            const resp = await verifyOTP({
                userName,
                otp
            })
            console.log(resp)
            // console.log(resp)
            const payload = { ...resp.data }
            // console.log('login', payload)
            if (payload) {
                setUserSession({ ...resp.data })
                dispatch(authSuccess({ ...payload }))
                navigation.navigate(APP_CONFIG.SCREENS.MENU_SCREEN)

            }
        } catch (error) {
            
        } finally {
            setLoading(false)
        }

    }
     /**
       * * END
     */
    
    return {
        isBtnDisabled,
        isLoading,
        optValue,
        setOtpValue,
        handleResendOtp,
        handleVerifyOTP
    }

}