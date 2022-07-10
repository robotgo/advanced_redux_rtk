import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      })
    })
  }
  )
})