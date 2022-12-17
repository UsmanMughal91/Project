
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://192.168.82.7:8000/api/user/'}),
   
    endpoints: (builder) => ({
       registerUser:builder.mutation({
        query:(user) => {
            return{
                url:"register",
                method:'POST',
                body: user ,
                headers:{
                    'Content-type':"application/json",
                }
            }
        }
       })
    }), 
})


export const { useRegisterUserMutation } = userAuthApi