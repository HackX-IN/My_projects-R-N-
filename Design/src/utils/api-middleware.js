import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from "../store";
import { BASE_URL } from "../constants/api";
import axios from "axios";



// export const axiosBaseQuery =
//     () =>
//         async ({ url, method, data, params }) => {
//             try {
//                 const result = await axios({
//                     url: BASE_URL + url,
//                     method,
//                     maxBodyLength: Infinity,
//                     data,
//                     params,
//                     headers: {
//                         'Access-Control-Allow-Origin':"*"
// ,                        'Content-Type': 'application/json',
//                         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2YmRlMGQ3M2JkYTQ1YjNlYTUxYjgiLCJvcmdhbml6YXRpb24iOiI2Mzk2YmRmMWQ3M2JkYTQ1YjNlYTUxZDUiLCJ1c2VyTmFtZSI6IkthcmFuIiwiaWF0IjoxNjgzMTgwNDgwfQ.k9utK9iJmthHwPpBaCHkCxb29fxcwhS6hw805pAZ7CU'
//                     },

//                 })
//                 return { data: result.data }
//             } catch (axiosError) {
//                 let err = axiosError
//                 return {
//                     error: {
//                         status: err.response?.status,
//                         data: err.response?.data || err.message,
//                     },
//                 }
//             }
//         }
export const baseQueryHeaders = (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
}
// // set base query with pre-defined headers , without tokens in it.
export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: baseQueryHeaders

});
export const baseQueryWithToken = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.token
        console.log(token)
        headers.set("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI0OTUzN2M3NzI0MGY1OTgwMGU2ODgiLCJvcmdhbml6YXRpb24iOiI2MzI0OTU1OGM3NzI0MGY1OTgwMGU2YWMiLCJ1c2VyTmFtZSI6IktLSyIsImlhdCI6MTY4NDgyNjA1Mn0.9JdpPYYVdvWya68PmgXQuHnhBfZMFUfjvlV7Fcjp8Og`);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");
        headers.set('Access-Control-Allow-Origin', '*');
        return headers
    }
})
// 
// 
//  Auth token 
const authToken = null
const axiosInstance = axios.create({
    baseURL: BASE_URL, // Replace with your base URL
    timeout: 5000, // Set the desired timeout value
});

const makeApiRequest = async ({
    url,
    method = 'GET',
    body = null, }) => {
    try {

        let data = JSON.stringify({
            "userName": "xchander@gmail.com",
            "password": "seven3kkk!@"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://dev.logizip.io/api/users/login',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2YmRlMGQ3M2JkYTQ1YjNlYTUxYjgiLCJvcmdhbml6YXRpb24iOiI2Mzk2YmRmMWQ3M2JkYTQ1YjNlYTUxZDUiLCJ1c2VyTmFtZSI6IkthcmFuIiwiaWF0IjoxNjgzMTgwNDgwfQ.k9utK9iJmthHwPpBaCHkCxb29fxcwhS6hw805pAZ7CU'
            },
            data: data
        };

        let headers = {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Connection': 'keep-alive'

        }
        if (authToken) {
            headers.Authorization = `Bearer ${authToken}`;
        }

        const response = await axiosInstance.request(config);

        return response.data;
    } catch (error) {
        // Handle the error
        throw error;
    }
};


export default makeApiRequest;