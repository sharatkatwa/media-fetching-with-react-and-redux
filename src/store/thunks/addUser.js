import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { faker } from '@faker-js/faker'

const addUser = createAsyncThunk('users/add', async () => {
  const res = await axios.post('http://localhost:3005/users', {
    name: faker.name.fullName(),
  })
  return res.data
})

export { addUser }
