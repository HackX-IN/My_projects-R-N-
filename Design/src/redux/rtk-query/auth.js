// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseQuery, baseQueryWithToken, axiosBaseQuery } from "../../utils/api-middleware";
import { BASE_URL } from "../../constants/api";
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: "authApi",

    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'application/json',
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => {

                return ({
                    url: "/users/login",
                    method: "POST",
                    body: credentials
                })
            }
        }),
        sendOtp: builder.mutation({
            query: credentials => ({
                url: '/emails/send-otp',
                method: 'post',
                body: credentials
            })
        }),
        verifyOtp: builder.mutation({
            query: credentials => ({
                url: '/emails/verify-otp',
                method: 'post',
                body:credentials
            })
        })
    }),

})

export const {
    useLoginMutation,
    useSendOtpMutation,
    useVerifyOtpMutation
} = authApi