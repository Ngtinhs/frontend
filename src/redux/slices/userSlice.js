import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
    access_token: "",

}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { _id = "", name = '', email, phone = '', address = '', avatar = '', access_token } = action.payload
            console.log("action", action.payload)
            state.id = _id
            state.name = name
            state.email = email
            state.phone = phone
            state.address = address
            state.avatar = avatar
            state.access_token = access_token
        },

        resetUser: (state) => {
            state.id = ""
            state.name = ""
            state.email = ""
            state.phone = ""
            state.address = ""
            state.avatar = ""
            state.access_token = ""
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer