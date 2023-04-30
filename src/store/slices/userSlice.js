import { createSlice } from '@reduxjs/toolkit'
import { addUser } from '../thunks/addUser'
import { fetchUsers } from '../thunks/fetchUsers'
import { removeUser } from '../thunks/removeUser'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetch users extraReducers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    // add users extraReducers
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload)
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    // delete users extraReducers
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter((user) => user.id !== action.payload.id)
    })
    builder.addCase(removeUser.rejected, (state, action) => {
      state.error = action.error
    })
  },
})

export const userReducer = userSlice.reducer
