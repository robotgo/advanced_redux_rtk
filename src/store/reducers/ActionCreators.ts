import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//   } catch (e) {

//     let message = 'Unknown Error'
//     if (e instanceof Error) {
//       message = e.message
//     }

//     dispatch(userSlice.actions.usersFetchingError(message))
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    } catch (e) {
      return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
    }

  }
)