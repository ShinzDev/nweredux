import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./dataBase";


export const userSlice = createSlice({
    name:'user',
    initialState:userList,

    reducer:{
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }

 
})

export  const {addUser} = userSlice.actions

export default userSlice.reducer