import { createSlice } from '@reduxjs/toolkit'

export const UserLoginSlice = createSlice({
  name: 'user',
  initialState: {
    name: "LogIn",
  },
  reducers: {
    change : (state) => {
        if(state.name == "LogIn")
            state.name = "LogOut";
        else   
            state.name = "LogIn";
    },
  },
})

export const { change } = UserLoginSlice.actions;

export default UserLoginSlice.reducer;