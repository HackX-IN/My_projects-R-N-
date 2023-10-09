// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseQuery, baseQueryWithToken, axiosBaseQuery } from "../../utils/api-middleware";
import { BASE_URL } from "../../constants/api";
// Define a service using a base URL and expected endpoints
export const tripsApi = createApi({
    reducerPath: "tripsApi",
    baseQuery: baseQueryWithToken,
    endpoints: (builder) => ({
        getTrips: builder.query({
            query: () => {
               
                return ({
                    url: "/trips",
                    method: "GET",
                })
            }
        }),
        getTripsById: builder.query({
            query: (id) => ({
                url: `/trips/${id}`,
                method: "GET",
            })
        })

    }),

})

export const { useGetTripsQuery,useLazyGetTripsByIdQuery } = tripsApi