import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    setCredentials,
    logOut
} from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://lesinnovateurs.me/api/',
    prepareHeaders(headers, { getState }) {
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', ` ${token}`),
                headers.set('type', 'Bearer')
        }
        return headers
    }
})

const baseQueryWithReauth = async(args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    if (result.status === 400) {
        const { data, error } = await baseQuery('auth/refresh', api, extraOptions)
        if (error) {
            api.dispatch(logOut())
            return result
        }
        api.dispatch(setCredentials(data))
        return baseQuery(args, api, extraOptions)
    }
    return result
}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST'
            }),
        }),
        user: builder.query({
            query: () => 'user',
        }),
        candidats: builder.query({
            query: () => 'candidats',
            providesTags: ['candidats']
        }),
        candidat: builder.query({
            query: (id) => `candidats/${id}`,
            providesTags: ['candidats']
        }),
        vote: builder.mutation({
            query: (id) => ({
                url: `candidats/${id}/vote`,
                method: 'POST'
            }),
        }),
        result: builder.query({
            query: () => 'result',
            providesTags: ['result']
        })
    })
})
export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useUserQuery, useCandidatsQuery, useCandidatQuery, useVoteMutation, useResultQuery } = apiSlice