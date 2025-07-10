import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomePage: builder.query<Efood[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureEfood: builder.query<Efood, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeatureEfoodQuery, useGetHomePageQuery } = api
export default api
